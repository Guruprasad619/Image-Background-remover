import React from 'react';
import { ImageData } from '../types';
import ProgressBar from './ProgressBar';

interface ProcessingViewProps {
  originalImage: ImageData;
  progress: number;
}

const ProcessingView: React.FC<ProcessingViewProps> = ({ originalImage, progress }) => {
  return (
    <div className="p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Processing Your Image
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Our AI is analyzing and removing the background. This will only take a moment.
        </p>
      </div>
      
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img 
          src={originalImage.dataUrl}
          alt="Original"
          className="w-full h-auto max-h-[400px] object-contain"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
        </div>
      </div>
      
      <div className="max-w-md mx-auto">
        <ProgressBar progress={progress} />
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          {progress < 30 ? 'Analyzing image...' : 
           progress < 60 ? 'Detecting objects...' : 
           progress < 90 ? 'Removing background...' : 
           'Finalizing your image...'}
        </p>
      </div>
    </div>
  );
};

export default ProcessingView;