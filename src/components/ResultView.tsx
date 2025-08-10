import React, { useState } from 'react';
import { ImageData } from '../types';
import ComparisonSlider from './ComparisonSlider';
import { Download, RotateCcw } from 'lucide-react';

interface ResultViewProps {
  originalImage: ImageData;
  processedImage: ImageData;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ 
  originalImage, 
  processedImage,
  onReset
}) => {
  const [downloadingState, setDownloadingState] = useState<'idle' | 'downloading' | 'success'>('idle');

  const handleDownload = () => {
    setDownloadingState('downloading');
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = processedImage.dataUrl;
    
    // Create filename by adding -bg-removed to the original filename
    const fileExtension = processedImage.name.split('.').pop();
    const baseName = processedImage.name.substring(0, processedImage.name.lastIndexOf('.'));
    link.download = `${baseName}-bg-removed.${fileExtension}`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success state briefly
    setDownloadingState('success');
    setTimeout(() => setDownloadingState('idle'), 2000);
  };

  return (
    <div className="p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mb-2">
          Background Removed!
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Compare the Image before and after. Happy with the result? Download your image for free!
        </p>
      </div>
      
      <div className="rounded-lg overflow-hidden mb-10 bg-gray-100 dark:bg-gray-700 max-h-[500px] h-[400px] shadow">
        <ComparisonSlider 
          originalImage={originalImage.dataUrl}
          processedImage={processedImage.dataUrl}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-md transition-colors duration-200 w-full sm:w-auto"
        >
          <RotateCcw className="h-5 w-5" />
          <span>Upload New Image</span>
        </button>
        
        <button
          onClick={handleDownload}
          disabled={downloadingState === 'downloading'}
          className={`
            flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-bold shadow-md transition-colors duration-200 w-full sm:w-auto
            ${downloadingState === 'success'
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
            }
          `}
        >
          {downloadingState === 'downloading' ? (
            <>
              <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
              <span>Downloading...</span>
            </>
          ) : downloadingState === 'success' ? (
            <>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5" />
              <span>Download Image</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ResultView;