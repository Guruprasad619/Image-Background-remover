import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Scissors } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 shadow-md transition-colors duration-300">
      <div className="flex items-center space-x-3">
        <Scissors className="h-7 w-7 text-blue-600 dark:text-blue-400 drop-shadow" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Background Remover</h1>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg text-base font-semibold transition-colors duration-200
              ${isActive
                ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg text-base font-semibold transition-colors duration-200
              ${isActive
                ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg text-base font-semibold transition-colors duration-200
              ${isActive
                ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900'}`
            }
          >
            Contact
          </NavLink>
        </nav>
        <button 
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 shadow transition-colors duration-200"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 text-gray-700" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-400" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;