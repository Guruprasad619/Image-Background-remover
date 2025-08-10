import React, { useState, useCallback, useEffect } from 'react';
import UploadArea from './UploadArea';
import ProcessingView from './ProcessingView';
import ResultView from './ResultView';
import { ImageData } from '../types';
import { processImage } from '../services/backgroundRemovalService';

const ImageProcessor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<ImageData | null>(null);
  const [processedImage, setProcessedImage] = useState<ImageData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = useCallback((imageData: ImageData) => {
    setOriginalImage(imageData);
    setProcessedImage(null);
    setError(null);
    setIsProcessing(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (5 + Math.random() * 10);
        return newProgress < 90 ? newProgress : prev;
      });
    }, 200);

    processImage(imageData.dataUrl)
      .then(processedDataUrl => {
        clearInterval(progressInterval);
        setProgress(100);
        
        setTimeout(() => {
          setProcessedImage({
            file: imageData.file,
            dataUrl: processedDataUrl,
            name: imageData.name
          });
          setIsProcessing(false);
        }, 300);
      })
      .catch(err => {
        clearInterval(progressInterval);
        setError(`Error processing image: ${err.message || 'Unknown error'}`);
        setIsProcessing(false);
      });
  }, []);

  const resetProcessor = useCallback(() => {
    setOriginalImage(null);
    setProcessedImage(null);
    setError(null);
    setProgress(0);
  }, []);

  // Handle sample image selection
  useEffect(() => {
    const handleSampleImage = (event: Event) => {
      const customEvent = event as CustomEvent<ImageData>;
      handleImageUpload(customEvent.detail);
    };

    window.addEventListener('sampleImageSelected', handleSampleImage);
    return () => window.removeEventListener('sampleImageSelected', handleSampleImage);
  }, [handleImageUpload]);

  let content;
  if (isProcessing && originalImage) {
    content = <ProcessingView originalImage={originalImage} progress={progress} />;
  } else if (processedImage) {
    content = (
      <ResultView 
        originalImage={originalImage!}
        processedImage={processedImage}
        onReset={resetProcessor}
      />
    );
  } else {
    content = <UploadArea onImageUpload={handleImageUpload} error={error} />;
  }

  return (
    <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-300 overflow-hidden">
      {content}
    </div>
  );
};

export default ImageProcessor;