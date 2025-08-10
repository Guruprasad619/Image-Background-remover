import { API_CONFIG } from '../config/api';

export const processImage = async (imageDataUrl: string): Promise<string> => {
  try {
    // Convert base64 to blob
    const base64Data = imageDataUrl.split(',')[1];
    const imageBlob = await fetch(`data:image/jpeg;base64,${base64Data}`).then(res => res.blob());

    // Prepare form data
    const formData = new FormData();
    formData.append('image_file', imageBlob, 'image.jpg');
    formData.append('size', 'auto');

    // Make API request
    const response = await fetch(API_CONFIG.API_ENDPOINT, {
      method: 'POST',
      headers: {
        'X-Api-Key': API_CONFIG.BACKGROUND_REMOVAL_API_KEY,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    // Convert response to base64
    const resultBlob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(resultBlob);
    });
  } catch (error) {
    console.error('Background removal failed:', error);
    if (error instanceof Error && error.message.includes('API Error')) {
      throw new Error('Background removal service is currently unavailable. Please try again later.');
    }
    throw new Error('Failed to process image. Please try again.');
  }
};