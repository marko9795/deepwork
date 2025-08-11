import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import type { DeepWorkSession } from '../../types/session';
import { formatDuration } from '../../utils/timeFormat';

interface SessionStatsProps {
  sessions: DeepWorkSession[];
}

export function SessionStats({ sessions }: SessionStatsProps) {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statsRef.current) {
      animate(statsRef.current.children, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        ease: 'out-quad',
        delay: stagger(150),
      });
    }
  }, [sessions]);

  const completedSessions = sessions.filter(s => s.completed);
  const totalTime = completedSessions.reduce((sum, session) => sum + session.duration, 0);

  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const todaySessions = completedSessions.filter(s => new Date(s.startTime) >= todayStart);
  const todayTime = todaySessions.reduce((sum, session) => sum + session.duration, 0);

  const thisWeek = new Date(today.getTime() - (today.getDay() * 24 * 60 * 60 * 1000));
  thisWeek.setHours(0, 0, 0, 0);
  const weekSessions = completedSessions.filter(s => new Date(s.startTime) >= thisWeek);
  const weekTime = weekSessions.reduce((sum, session) => sum + session.duration, 0);

  return (
    <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl p-6 text-white opacity-0 shadow-lg dark:shadow-blue-900/25">
        <h3 className="text-sm font-medium opacity-90">Total Sessions</h3>
        <p className="text-3xl font-bold mt-2">{completedSessions.length}</p>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-xl p-6 text-white opacity-0 shadow-lg dark:shadow-green-900/25">
        <h3 className="text-sm font-medium opacity-90">Total Time</h3>
        <p className="text-3xl font-bold mt-2">{formatDuration(totalTime)}</p>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-xl p-6 text-white opacity-0 shadow-lg dark:shadow-purple-900/25">
        <h3 className="text-sm font-medium opacity-90">Today</h3>
        <p className="text-3xl font-bold mt-2">{formatDuration(todayTime)}</p>
        <p className="text-sm opacity-75 mt-1">{todaySessions.length} sessions</p>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-xl p-6 text-white opacity-0 shadow-lg dark:shadow-orange-900/25">
        <h3 className="text-sm font-medium opacity-90">This Week</h3>
        <p className="text-3xl font-bold mt-2">{formatDuration(weekTime)}</p>
        <p className="text-sm opacity-75 mt-1">{weekSessions.length} sessions</p>
      </div>
    </div>
  );
}