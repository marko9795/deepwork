import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

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
    <nav ref={navRef} className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 opacity-0">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            <span className="text-xl font-bold text-gray-800">DeepWork</span>
          </div>

          {/* Navigation buttons */}
          <div className="flex space-x-1">
            <button
              onClick={() => onViewChange('timer')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                currentView === 'timer'
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              Timer
            </button>
            <button
              onClick={() => onViewChange('history')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                currentView === 'history'
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              History
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}