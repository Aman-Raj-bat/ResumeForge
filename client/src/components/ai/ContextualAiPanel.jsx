import React, { useState } from 'react';
import { Sparkles, Loader2, Check, X, RefreshCw } from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../ui/Toast';

const ContextualAiPanel = ({ activeField, activeText, contextData, onApply, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const { toast } = useToast();

  const handleAction = async (action) => {
    if (!activeText || activeText.trim() === '') {
      toast.error('Please enter some text first for the AI to work with.');
      return;
    }

    try {
      setIsLoading(true);
      setAiResult(null);
      
      const res = await api.post('/ai/rewrite', {
        text: activeText,
        action,
        context: contextData
      });

      if (res?.data?.success) {
        setAiResult(res.data.data.result);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to generate AI suggestion.');
      console.error('AI error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!activeField) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center border-l border-border-main bg-[#0B0C10]">
        <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
          <Sparkles className="text-purple-400" size={28} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">ResumeForge AI</h3>
        <p className="text-gray-400 text-sm">Select a text field in your resume to get contextual writing assistance.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col border-l border-border-main bg-[#0B0C10] w-[320px] shrink-0 overflow-y-auto editor-scroll">
      <div className="p-4 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0B0C10] z-10">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-purple-400" />
          <h3 className="font-semibold text-white text-sm">AI Assistant</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <X size={16} />
        </button>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-6">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Targeting</p>
          <div className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-gray-300 truncate">
            {activeField.label || 'Selected Text'}
          </div>
        </div>

        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <button onClick={() => handleAction('Improve')} disabled={isLoading} className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2.5 text-xs font-medium text-white transition-colors disabled:opacity-50">
            Improve
          </button>
          <button onClick={() => handleAction('Make concise')} disabled={isLoading} className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2.5 text-xs font-medium text-white transition-colors disabled:opacity-50">
            Make Concise
          </button>
          <button onClick={() => handleAction('Add impact')} disabled={isLoading} className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2.5 text-xs font-medium text-white transition-colors disabled:opacity-50">
            Add Impact
          </button>
          <button onClick={() => handleAction('Make ATS-friendly')} disabled={isLoading} className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2.5 text-xs font-medium text-white transition-colors disabled:opacity-50">
            ATS Optimize
          </button>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-10 opacity-70">
            <Loader2 className="animate-spin text-purple-400 mb-4" size={24} />
            <p className="text-sm text-gray-400">Generating suggestion...</p>
          </div>
        )}

        {aiResult && !isLoading && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 flex-grow flex flex-col">
            <div className="bg-[#1a1c23] border border-purple-500/30 rounded-xl p-4 mb-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
              <p className="text-xs font-medium text-purple-400 mb-2">Suggestion</p>
              <p className="text-sm text-white leading-relaxed mb-4">{aiResult.suggestion}</p>
              
              <div className="bg-black/30 rounded p-3 mb-4">
                <p className="text-xs text-gray-400"><span className="font-semibold text-gray-300">Why:</span> {aiResult.reason}</p>
              </div>

              <div className="flex gap-2 mt-auto">
                <button 
                  onClick={() => onApply(aiResult.suggestion)}
                  className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Check size={14} /> Apply
                </button>
                <button 
                  onClick={() => handleAction('Regenerate')}
                  className="px-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
                  title="Regenerate"
                >
                  <RefreshCw size={14} />
                </button>
              </div>
            </div>

            {aiResult.alternatives?.length > 0 && (
              <div className="space-y-3 mt-2">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Alternatives</p>
                {aiResult.alternatives.map((alt, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-3 group hover:border-white/20 transition-colors cursor-pointer" onClick={() => onApply(alt)}>
                    <p className="text-xs text-gray-300 group-hover:text-white transition-colors">{alt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContextualAiPanel;
