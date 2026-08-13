import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useResumeStore } from '../../store/resumeStore';
import api from '../../services/api';
import ResumeForm from '../../components/resume/ResumeForm';
import ResumePreview from '../../components/resume/ResumePreview';
import TemplateSelector from '../../components/preview/TemplateSelector';
import PdfExportButton from '../../components/pdf/PdfExportButton';
import { Loader2, ArrowLeft, AlertCircle, CheckCircle2, ChevronLeft } from 'lucide-react';
import AiModal from '../../components/ai/AiModal';

const ResumeEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setActiveResumeId, saveStatus, setSaveStatus, updateResumeInList } = useResumeStore();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // For mobile toggle
  
  const { register, control, watch, reset, getValues, setValue, formState: { errors } } = useForm({
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

  // Deep equality check
  const hasChanges = (current, lastSaved) => {
    if (!lastSaved) return true;
    return JSON.stringify(current) !== JSON.stringify(lastSaved);
  };

  useEffect(() => {
    const fetchResume = async () => {
      try {
        setIsInitialLoading(true);
        const res = await api.get(`/resumes/${id}`);
        if (res?.data?.success) {
          const fetchedResume = res.data.data;
          setActiveResumeId(fetchedResume._id);
          lastSavedData.current = fetchedResume;
          reset(fetchedResume);
        }
      } catch (error) {
        console.error('Failed to fetch resume:', error);
        navigate('/dashboard');
      } finally {
        setIsInitialLoading(false);
      }
    };
    
    if (id) fetchResume();
    return () => setActiveResumeId(null);
  }, [id, navigate, setActiveResumeId, reset]);

  useEffect(() => {
    if (isInitialLoading) return;
    
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!hasChanges(formData, lastSavedData.current)) return;

    const saveChanges = async () => {
      try {
        setSaveStatus('saving');
        const res = await api.put(`/resumes/${id}`, formData);
        setSaveStatus('saved');
        lastSavedData.current = formData;
        
        if (res?.data?.success) {
          updateResumeInList(res.data.data);
        }
      } catch (error) {
        console.error('Failed to save resume:', error);
        setSaveStatus('error');
      }
    };

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => saveChanges(), 1000);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [formData, id, isInitialLoading, setSaveStatus, updateResumeInList]);

  if (isInitialLoading) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center bg-background min-h-screen gap-4">
        <Loader2 size={32} className="animate-spin text-primary" />
        <p className="text-text-muted text-sm font-medium">Loading workspace...</p>
      </div>
    );
  }

  const renderSaveStatus = () => {
    switch (saveStatus) {
      case 'saving':
        return <span className="flex items-center gap-1.5 text-text-muted text-xs font-medium"><Loader2 size={12} className="animate-spin" /> Saving...</span>;
      case 'saved':
        return <span className="flex items-center gap-1.5 text-text-muted text-xs font-medium"><CheckCircle2 size={12} /> Saved</span>;
      case 'error':
        return <span className="flex items-center gap-1.5 text-red-500 text-xs font-medium"><AlertCircle size={12} /> Error saving</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Editor Header */}
      <header className="h-14 bg-surface border-b border-border-main flex items-center justify-between px-4 shrink-0 z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 text-text-muted hover:text-text-main transition-colors"
            title="Back to Dashboard"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="w-px h-5 bg-border-main mx-1 hidden sm:block"></div>
          <div className="flex flex-col justify-center">
            <h1 className="text-sm font-semibold text-text-main truncate max-w-[150px] sm:max-w-xs">
              {formData.title || 'Untitled Resume'}
            </h1>
          </div>
          <div className="ml-2">
            {renderSaveStatus()}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden text-sm font-medium text-text-muted px-3 py-1.5 rounded border border-border-main"
            onClick={() => setIsPreviewOpen(!isPreviewOpen)}
          >
            {isPreviewOpen ? 'Edit' : 'Preview'}
          </button>
          <div className="hidden sm:block">
            <TemplateSelector />
          </div>
          <PdfExportButton targetRef={printRef} filename={formData.title || 'resume'} />
        </div>
      </header>

      {/* Editor Workspace */}
      <div className="flex-grow flex overflow-hidden relative">
        {/* Left Panel: Form */}
        <div className={`w-full md:w-[45%] lg:w-[40%] xl:w-[35%] h-full flex flex-col bg-surface border-r border-border-main z-0 transition-transform ${isPreviewOpen ? '-translate-x-full absolute md:relative md:translate-x-0' : 'translate-x-0'}`}>
          <ResumeForm register={register} control={control} errors={errors} getValues={getValues} setValue={setValue} />
        </div>
        
        {/* Right Panel: Live Preview */}
        <div className={`w-full md:w-[55%] lg:w-[60%] xl:w-[65%] h-full bg-[#eef2f6] flex flex-col transition-transform ${isPreviewOpen ? 'translate-x-0' : 'translate-x-full absolute md:relative md:translate-x-0'}`}>
          <ResumePreview data={formData} targetRef={printRef} />
        </div>
      </div>
      
      {/* Global AI Modal (will be refactored to contextual panel later) */}
      <AiModal />
    </div>
  );
};

export default ResumeEditor;
