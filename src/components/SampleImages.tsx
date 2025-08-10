import React from 'react';
import { ImageData } from '../types';

const SampleImages: React.FC = () => {
  const sampleImages = [
    {
      url: 'https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Portrait',
      description: 'Perfect for profile pictures'
    },
    {
      url: 'https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Product',
      description: 'Ideal for e-commerce'
    },
    {
      url: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nature',
      description: 'Great for landscapes'
    }
  ];

  const handleSampleImageClick = async (imageUrl: string, title: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], `sample-${title.toLowerCase()}.jpg`, { type: 'image/jpeg' });
      
      const reader = new FileReader();
      reader.onload = () => {
        const imageData: ImageData = {
          file,
          dataUrl: reader.result as string,
          name: file.name
        };
        window.dispatchEvent(new CustomEvent('sampleImageSelected', { detail: imageData }));
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error loading sample image:', error);
    }
  };

  return (
    <section className="w-full max-w-4xl bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl p-6 md:p-10 mx-auto mt-30">
      <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mb-8 text-center">
        Try with Sample Images
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sampleImages.map((image, index) => (
          <div
            key={index}
            onClick={() => handleSampleImageClick(image.url, image.title)}
            className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700"
          >
            <div className="relative">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="font-bold text-lg text-white drop-shadow">{image.title}</h3>
                  <p className="text-sm text-gray-200 opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SampleImages;