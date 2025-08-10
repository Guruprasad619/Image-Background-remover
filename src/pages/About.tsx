import React from 'react';

const About: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mb-3">
          About Background Remover
        </h1>
        <div className="prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Background Remover</strong> is a powerful and easy-to-use web application that helps you remove backgrounds from images instantly. Whether you need transparent backgrounds for e-commerce products, profile pictures, or creative projects, our tool makes the process seamless and efficient.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our platform leverages the industry-leading <a href="https://www.remove.bg/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">remove.bg API</a> to deliver high-quality background removal. This advanced AI technology ensures precise results while preserving the fine details of your images.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Key Features:</strong>
            <ul className="list-disc ml-6">
              <li>Instant background removal with just a few clicks</li>
              <li>Supports popular image formats like JPG, PNG, and WEBP</li>
              <li>Side-by-side comparison of original and processed images</li>
              <li>Download your processed images for free</li>
              <li>Modern, responsive, and user-friendly interface</li>
              <li>No sign-up required</li>
            </ul>
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We are committed to providing a fast, secure, and reliable experience. Your images are processed securely and are never stored longer than necessary. If you have any feedback or suggestions, feel free to reach out via our contact page!
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;