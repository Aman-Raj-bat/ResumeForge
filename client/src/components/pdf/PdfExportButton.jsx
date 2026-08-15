import { Printer } from 'lucide-react';

const PdfExportButton = ({ targetRef, filename }) => {
  const handleExport = () => {
    if (!targetRef.current) return;
    
    const printWindow = window.open('', '_blank', 'width=1000,height=900');
    if (!printWindow) {
      alert('Please allow popups to print your resume.');
      return;
    }
    
    // Extract HTML and copy all current stylesheets to ensure the resume looks exactly the same
    const printContent = targetRef.current.innerHTML;
    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(style => style.outerHTML)
      .join('\n');
      
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${filename || 'resume'}</title>
          ${styles}
          <style>
            @media print {
              body { margin: 0; padding: 0; background: white; }
              @page { margin: 0; size: auto; }
            }
            body { background: white; margin: 0; padding: 0; }
            .print-container { width: 210mm; margin: 0 auto; background: white; }
          </style>
        </head>
        <body>
          <div class="print-container">
            ${printContent}
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    // Small delay to let styles load before printing
    setTimeout(() => {
      printWindow.print();
    }, 750);
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-all shadow-subtle hover:shadow-elevated"
    >
      <Printer size={14} />
      Print / PDF
    </button>
  );
};

export default PdfExportButton;
