import React from 'react';

interface ComparisonSliderProps {
  originalImage: string;
  processedImage: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  originalImage, 
  processedImage 
}) => {
  return (
    <div className="flex w-full h-full bg-neutral-100 dark:bg-neutral-800 relative">
      {/* Original Image on the left */}
      <div className="flex-1 flex items-center justify-center relative border-r border-gray-300 dark:border-gray-700">
        <img 
          src={originalImage} 
          alt="Original"
          className="w-full h-full max-w-[400px] max-h-[400px] object-contain"
        />
        <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-2 py-1 rounded">
          Original
        </div>
      </div>
      {/* Processed Image on the right */}
      <div className="flex-1 flex items-center justify-center relative">
        <img 
          src={processedImage} 
          alt="Processed"
          className="w-full h-full max-w-[400px] max-h-[400px] object-contain"
        />
        <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-2 py-1 rounded">
          Processed
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;