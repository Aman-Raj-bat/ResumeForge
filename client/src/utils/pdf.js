import html2pdf from 'html2pdf.js';

export const generatePDF = async (element, filename = 'resume.pdf') => {
  if (!element) return;

  const opt = {
    margin: 0,
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  try {
    await html2pdf().from(element).set(opt).save();
    return true;
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    return false;
  }
};
