import { Sparkles } from 'lucide-react';

const AiLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 space-y-4">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-200 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-white p-4 rounded-full border border-purple-100 shadow-sm animate-bounce">
          <Sparkles size={24} className="text-purple-600" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">Gemini is thinking...</h3>
        <p className="text-sm text-gray-500 mt-1">Generating professional suggestions</p>
      </div>
    </div>
  );
};

export default AiLoading;
