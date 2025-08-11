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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full">
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