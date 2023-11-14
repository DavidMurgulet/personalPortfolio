import React from 'react';

const PdfButton = () => {
  const openPdfInNewTab = () => {
    const newTab = window.open('/Users/davidmurgulet/Documents/Projects/react-portfolio/src/pdf/ResumePortfolioVer.pdf', '_blank');
    if (newTab) {
      newTab.focus();
    } else {
      alert('Please allow pop-ups for this site and try again.');
    }
  };

  return (
    <button onClick={openPdfInNewTab}>
      Open PDF in New Tab
    </button>
  );
};

export default PdfButton;