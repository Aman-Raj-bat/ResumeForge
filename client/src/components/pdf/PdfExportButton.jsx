import { useState } from 'react';
import { Printer, Loader2 } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';

const PdfExportButton = ({ targetRef, filename }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
    documentTitle: filename || 'resume',
    onBeforePrint: () => setIsExporting(true),
    onAfterPrint: () => setIsExporting(false),
    onPrintError: () => setIsExporting(false),
  });

  const handleExport = () => {
    if (!targetRef.current || isExporting) return;
    setIsExporting(true);
    setTimeout(() => {
      handlePrint();
    }, 150);
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-all shadow-subtle hover:shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isExporting ? (
        <>
          <Loader2 size={14} className="animate-spin" />
          Preparing...
        </>
      ) : (
        <>
          <Printer size={14} />
          Print / PDF
        </>
      )}
    </button>
  );
};

export default PdfExportButton;
