import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 px-6 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="flex justify-center items-center text-sm text-gray-600 dark:text-gray-400 space-x-2">
        <span>2025 &copy; Guruprasad GM . All rights reserved.</span>
        <Heart className="h-4 w-4 text-red-500 inline" />
      </div>
    </footer>
  );
};

export default Footer;