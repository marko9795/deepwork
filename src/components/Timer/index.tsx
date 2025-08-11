import { useTimer } from '../../hooks/useTimer';
import { TimerDisplay } from './TimerDisplay';

export function Timer() {
  const { timerState, settings, startTimer, pauseTimer, resetTimer } = useTimer();

  const getTotalTime = () => {
    switch (timerState.mode) {
      case 'work': return settings.workDuration * 60;
      case 'break': return settings.breakDuration * 60;
      case 'longBreak': return settings.longBreakDuration * 60;
      default: return settings.workDuration * 60;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-200">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 p-12 max-w-md w-full border dark:border-gray-700 transition-colors duration-200">
        <TimerDisplay
          timerState={timerState}
          totalTime={getTotalTime()}
          onStart={startTimer}
          onPause={pauseTimer}
          onReset={resetTimer}
        />
      </div>
    </div>
  );
}