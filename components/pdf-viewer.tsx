'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages || prev));
  };

  return (
    <div className="flex flex-col items-center h-full w-full bg-gray-100 overflow-auto">
      <div className="sticky top-0 z-10 w-full bg-white/90 backdrop-blur-sm p-4 flex items-center justify-between gap-4 border-b">
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm">
            Page {pageNumber} of {numPages || '--'}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 1)}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(prev => Math.max(prev - 0.1, 0.5))}
            className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          >
            -
          </button>
          <span className="text-sm w-16 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale(prev => Math.min(prev + 0.1, 2))}
            className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex-1 w-full overflow-auto p-4">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center w-full h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-gold"></div>
            </div>
          }
          error={
            <div className="text-center p-4">
              <p className="text-red-500">Error loading PDF. Please try again later.</p>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            className="mx-auto"
            loading={
              <div className="flex items-center justify-center w-full h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-gold"></div>
              </div>
            }
          />
        </Document>
      </div>
    </div>
  );
}

