import { useState, useEffect } from 'react';
import { X, Check, RefreshCw, Copy, AlertCircle } from 'lucide-react';
import AiLoading from './AiLoading';

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
      setError(err?.response?.data?.message || err.message || 'Failed to generate AI response');
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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50 shrink-0">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            ✨ {title}
          </h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto grow">
          {isLoading ? (
            <AiLoading />
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Oops! Something went wrong</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-md">{error}</p>
            </div>
          ) : result ? (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed text-sm">
                  {result}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        {!isLoading && (result || error) && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={handleGenerate}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <RefreshCw size={16} />
                Regenerate
              </button>
              {result && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <Copy size={16} />
                  Copy
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              {result && (
                <button
                  onClick={() => {
                    onAccept(result);
                    handleClose();
                  }}
                  className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-primary rounded-md hover:opacity-90 transition-opacity"
                >
                  <Check size={16} />
                  Apply
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
