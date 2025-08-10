import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-blue-100 dark:border-gray-700">
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Have questions, feedback, or need support? We’d love to hear from you!
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-500" />
            <a
              href="mailto:rhn25560@gmail.com"
              className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-800 transition-colors"
            >
              rhn25560@gmail.com
            </a>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
          <div className="flex items-center space-x-3">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">
              We’ll get back to you as soon as possible.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;