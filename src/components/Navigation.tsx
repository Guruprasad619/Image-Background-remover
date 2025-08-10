import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 py-2">
          {['/', '/about', '/contact'].map((path, idx) => {
            const labels = ['Home', 'About', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-base font-semibold transition-colors duration-200 rounded-lg
                  ${isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}
                  after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100
                  `
                }
                style={({ isActive }) => ({
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;