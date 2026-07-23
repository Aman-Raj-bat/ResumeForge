import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useResumeStore } from '../../store/resumeStore';
import api from '../../services/api';
import ResumeForm from '../../components/resume/ResumeForm';
import ResumePreview from '../../components/resume/ResumePreview';
import TemplateSelector from '../../components/preview/TemplateSelector';
import PdfExportButton from '../../components/pdf/PdfExportButton';
import { Loader2, ArrowLeft, AlertCircle, Check } from 'lucide-react';

const ResumeEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setActiveResumeId, saveStatus, setSaveStatus, updateResumeInList } = useResumeStore();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  
  const { register, control, watch, reset, formState: { errors, isDirty } } = useForm({
    defaultValues: {
      title: 'Untitled Resume',
      personalInfo: {},
      summary: '',
      education: [],
      experience: [],
      projects: [],
      skills: [],
      certifications: [],
      languages: [],
    }
  });

  const formData = watch();
  const debounceTimer = useRef(null);
  const isFirstRender = useRef(true);
  const lastSavedData = useRef(null);
  const printRef = useRef(null);

  // Deep equality check for "Only save when changes exist"
  const hasChanges = (current, lastSaved) => {
    if (!lastSaved) return true;
    return JSON.stringify(current) !== JSON.stringify(lastSaved);
  };

  // Fetch resume data on mount
  useEffect(() => {
    const fetchResume = async () => {
      try {
        setIsInitialLoading(true);
        const res = await api.get(`/resumes/${id}`);
        if (res.data.success) {
          const fetchedResume = res.data.data;
          setActiveResumeId(fetchedResume._id);
          lastSavedData.current = fetchedResume;
          reset(fetchedResume); // populate form with fetched data
        }
      } catch (error) {
        console.error('Failed to fetch resume:', error);
        navigate('/dashboard'); // redirect if not found or unauthorized
      } finally {
        setIsInitialLoading(false);
      }
    };
    
    if (id) fetchResume();
    
    return () => setActiveResumeId(null); // cleanup on unmount
  }, [id, navigate, setActiveResumeId, reset]);

  // Auto-save logic with exactly ~1000ms debounce
  useEffect(() => {
    if (isInitialLoading) return;
    
    // Skip the first render effect trigger
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Only save when changes actually exist
    if (!hasChanges(formData, lastSavedData.current)) {
      return;
    }

    const saveChanges = async () => {
      try {
        setSaveStatus('saving');
        const res = await api.put(`/resumes/${id}`, formData);
        setSaveStatus('saved');
        lastSavedData.current = formData;
        
        // Optionally update the list if needed, though mostly relevant for Dashboard
        if (res.data.success) {
          updateResumeInList(res.data.data);
        }
      } catch (error) {
        console.error('Failed to save resume:', error);
        setSaveStatus('error');
      }
    };

    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new debounce timer to 1000ms
    debounceTimer.current = setTimeout(() => {
      saveChanges();
    }, 1000);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [formData, id, isInitialLoading, setSaveStatus, updateResumeInList]);

  if (isInitialLoading) {
    return (
      <div className="flex-grow flex items-center justify-center bg-background min-h-screen">
        <Loader2 size={48} className="animate-spin text-primary" />
      </div>
    );
  }

  const renderSaveStatus = () => {
    switch (saveStatus) {
      case 'saving':
        return <span className="flex items-center gap-1 text-yellow-600 text-sm font-medium bg-yellow-50 px-3 py-1 rounded-full"><Loader2 size={14} className="animate-spin" /> Saving...</span>;
      case 'saved':
        return <span className="flex items-center gap-1 text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full"><Check size={14} /> Saved</span>;
      case 'error':
        return <span className="flex items-center gap-1 text-red-600 text-sm font-medium bg-red-50 px-3 py-1 rounded-full"><AlertCircle size={14} /> Error saving</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Editor Header */}
      <header className="h-16 bg-surface border-b border-border-main flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-900 truncate max-w-[200px] lg:max-w-sm">
            {formData.title || 'Untitled Resume'}
          </h1>
          <div className="hidden md:block border-l border-gray-300 h-6 mx-2"></div>
          {renderSaveStatus()}
        </div>
        
        <div className="flex items-center gap-6">
          <TemplateSelector />
          <PdfExportButton targetRef={printRef} filename={formData.title || 'resume'} />
        </div>
      </header>

      {/* Editor Workspace */}
      <div className="flex-grow flex overflow-hidden">
        {/* Left Panel: Form */}
        <div className="w-1/2 h-full border-r border-border-main">
          <ResumeForm register={register} control={control} errors={errors} />
        </div>
        
        {/* Right Panel: Live Preview */}
        <div className="w-1/2 h-full">
          <ResumePreview data={formData} targetRef={printRef} />
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
