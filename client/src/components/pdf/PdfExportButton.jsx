import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { generatePDF } from '../../utils/pdf';

const PdfExportButton = ({ targetRef, filename }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    if (!targetRef.current || isExporting) return;
    
    setIsExporting(true);
    try {
      await generatePDF(targetRef.current, `${filename.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      {isExporting ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <Download size={16} />
          Export PDF
        </>
      )}
    </button>
  );
};

export default PdfExportButton;
