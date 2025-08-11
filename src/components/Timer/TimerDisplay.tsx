import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { formatTime } from '../../utils/timeFormat';
import { CircularProgress } from './CircularProgress';
import type { TimerState } from '../../types/session';

interface TimerDisplayProps {
  timerState: TimerState;
  totalTime: number;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export function TimerDisplay({ timerState, totalTime, onStart, onPause, onReset }: TimerDisplayProps) {
  const timerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const progress = 1 - (timerState.timeLeft / totalTime);
  
  // Animate timer appearance
  useEffect(() => {
    if (timerRef.current && buttonsRef.current) {
      animate([timerRef.current, buttonsRef.current], {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
        ease: 'out-elastic',
        delay: stagger(200),
      });
    }
  }, []);

  // Pulse animation when timer completes
  useEffect(() => {
    if (timerState.timeLeft === 0 && timerRef.current) {
      animate(timerRef.current, {
        scale: [1, 1.1, 1],
        duration: 600,
        ease: 'in-out-quad',
      });
    }
  }, [timerState.timeLeft]);

  const getModeColor = () => {
    switch (timerState.mode) {
      case 'work': return '#dc2626'; // red
      case 'break': return '#16a34a'; // green
      case 'longBreak': return '#2563eb'; // blue
      default: return '#6366f1'; // indigo
    }
  };

  const getModeLabel = () => {
    switch (timerState.mode) {
      case 'work': return 'Focus Time';
      case 'break': return 'Short Break';
      case 'longBreak': return 'Long Break';
      default: return 'Timer';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Mode indicator */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {getModeLabel()}
        </h2>
        <p className="text-gray-600">
          Session {timerState.sessionsCompleted + 1}
        </p>
      </div>

      {/* Timer circle */}
      <div ref={timerRef} className="relative opacity-0">
        <CircularProgress
          progress={progress}
          size={300}
          strokeWidth={12}
          color={getModeColor()}
          backgroundColor="#f3f4f6"
        />
        
        {/* Time display in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-mono font-bold text-gray-800 mb-2">
              {formatTime(timerState.timeLeft)}
            </div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              {timerState.isRunning ? 'Running' : 
               timerState.isPaused ? 'Paused' : 'Ready'}
            </div>
          </div>
        </div>
      </div>

      {/* Control buttons */}
      <div ref={buttonsRef} className="flex space-x-4 opacity-0">
        {!timerState.isRunning ? (
          <button
            onClick={onStart}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {timerState.isPaused ? 'Resume' : 'Start'}
          </button>
        ) : (
          <button
            onClick={onPause}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Pause
          </button>
        )}
        
        <button
          onClick={onReset}
          className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}