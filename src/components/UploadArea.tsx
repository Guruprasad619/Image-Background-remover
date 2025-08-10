import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image } from 'lucide-react';
import { ImageData } from '../types';

interface UploadAreaProps {
  onImageUpload: (imageData: ImageData) => void;
  error: string | null;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onImageUpload, error }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsDragging(false);
    if (acceptedFiles.length === 0) return;
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      onImageUpload({
        file,
        dataUrl,
        name: file.name
      });
    };
    reader.readAsDataURL(file);
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false)
  });

  return (
    <div className="p-8 md:p-12 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mb-3">
          Remove Image Background
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          Upload an image to automatically remove its background.<br />
          Our AI-powered tool works with portraits, products, and more.
        </p>
      </div>
      
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-2xl p-8 md:p-12 text-center cursor-pointer
          transition-all duration-200 ease-in-out shadow-lg bg-white/80 dark:bg-gray-900/60
          hover:shadow-2xl hover:bg-blue-50/60 dark:hover:bg-blue-900/30
          ${isDragging || isDragActive 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 scale-105'
            : 'border-gray-300 dark:border-gray-700'}
        `}
        style={{ outline: 'none' }}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className={`
            p-4 rounded-full shadow
            ${isDragging || isDragActive 
              ? 'bg-blue-100 dark:bg-blue-800'
              : 'bg-gray-100 dark:bg-gray-800'}
          `}>
            <Upload 
              className={`h-10 w-10 md:h-12 md:w-12 
                ${isDragging || isDragActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400'}
              `} 
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Drag & drop your image here
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              or click to browse from your device
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Image className="h-4 w-4" />
              <span>JPG, PNG, WEBP • Max 10MB</span>
            </div>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-xl text-center font-semibold shadow">
          {error}
        </div>
      )}
    </div>
  );
};

export default UploadArea;