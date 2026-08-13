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
      <div className="bg-surface rounded-2xl shadow-elevated w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh] border border-border-main ring-1 ring-black/5 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between shrink-0">
          <h2 className="text-sm font-bold text-text-main flex items-center gap-2 tracking-tight uppercase">
            <Sparkles size={16} className="text-primary" />
            {title}
          </h2>
          <button 
            onClick={handleClose}
            className="text-text-muted hover:text-text-main p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto grow bg-gray-50/50">
          {isLoading ? (
            <div className="py-8">
              <AiLoading />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                <AlertCircle size={24} className="text-red-500" />
              </div>
              <h3 className="text-base font-bold text-text-main tracking-tight">Generation failed</h3>
              <p className="text-sm text-text-muted mt-1.5 max-w-md">{error}</p>
            </div>
          ) : result ? (
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-xl border border-border-main shadow-subtle">
                <p className="text-text-main whitespace-pre-wrap leading-relaxed text-sm">
                  {result}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        {!isLoading && (result || error) && (
          <div className="px-6 py-5 flex items-center justify-between shrink-0 bg-surface border-t border-border-main">
            <div className="flex items-center gap-2">
              <button
                onClick={handleGenerate}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-text-main bg-white border border-border-main rounded-md hover:bg-gray-50 transition-colors shadow-sm"
              >
                <RefreshCw size={14} />
                Regenerate
              </button>
              {result && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-text-main bg-white border border-border-main rounded-md hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Copy size={14} />
                  Copy
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-text-muted hover:text-text-main transition-colors"
              >
                Cancel
              </button>
              {result && (
                <button
                  onClick={() => {
                    onAccept(result);
                    handleClose();
                  }}
                  className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-all shadow-subtle hover:shadow-elevated"
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
