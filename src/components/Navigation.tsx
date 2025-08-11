import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  currentView: 'timer' | 'history';
  onViewChange: (view: 'timer' | 'history') => void;
}

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      animate(navRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        ease: 'out-quad',
      });
    }
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50 opacity-0 border-b border-gray-200/20 dark:border-gray-700/30">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">DeepWorkClock</span>
          </div>

          {/* Navigation buttons and theme toggle */}
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <button
                onClick={() => onViewChange('timer')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentView === 'timer'
                    ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Timer
              </button>
              <button
                onClick={() => onViewChange('history')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentView === 'history'
                    ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                History
              </button>
            </div>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}