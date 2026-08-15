import { useState, useEffect } from 'react';
import { X, Check, RefreshCw, Copy, AlertCircle, Sparkles } from 'lucide-react';
import AiLoading from './AiLoading';
import PageTransition from '../animations/PageTransition';

const AiModal = ({ isOpen, onClose, onAccept, generateData, title = 'AI Assistant' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && !result && !error) {
      handleGenerate();
    }
  }, [isOpen]);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const generatedText = await generateData();
      setResult(generatedText);
    } catch (err) {
      setError(err.message || 'Failed to generate AI response');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setResult(null);
    setError(null);
    onClose();
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="bg-[#12131a] rounded-2xl shadow-elevated w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh] border border-white/10 ring-1 ring-black/5 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between shrink-0 border-b border-white/5">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 tracking-tight uppercase">
            <Sparkles size={16} className="text-purple-400" />
            {title}
          </h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-md hover:bg-white/5 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto grow bg-[#0B0C10]/50">
          {isLoading ? (
            <div className="py-8">
              <AiLoading />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                <AlertCircle size={24} className="text-red-500" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">Generation failed</h3>
              <p className="text-sm text-gray-400 mt-1.5 max-w-md">{error}</p>
            </div>
          ) : result ? (
            <div className="space-y-4">
              <div className="p-5 bg-[#1a1c23] rounded-xl border border-white/10 shadow-subtle">
                <p className="text-white whitespace-pre-wrap leading-relaxed text-sm">
                  {result}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        {!isLoading && (result || error) && (
          <div className="px-6 py-5 flex items-center justify-between shrink-0 bg-[#12131a] border-t border-white/10">
            <div className="flex items-center gap-2">
              <button
                onClick={handleGenerate}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-white rounded-md hover:bg-gray-200 transition-colors shadow-sm"
              >
                <RefreshCw size={14} />
                Regenerate
              </button>
              {result && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/10 border border-white/10 rounded-md hover:bg-white/20 transition-colors shadow-sm"
                >
                  <Copy size={14} />
                  Copy
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              {result && (
                <button
                  onClick={() => {
                    onAccept(result);
                    handleClose();
                  }}
                  className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-500 transition-all shadow-subtle hover:shadow-elevated"
                >
                  <Check size={14} />
                  Apply Text
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AiModal;
