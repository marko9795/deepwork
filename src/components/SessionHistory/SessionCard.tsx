import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import type { DeepWorkSession } from '../../types/session';
import { formatDuration, formatDate, formatTime12Hour } from '../../utils/timeFormat';

interface SessionCardProps {
  session: DeepWorkSession;
  index: number;
}

export function SessionCard({ session, index }: SessionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      animate(cardRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        ease: 'out-quad',
        delay: index * 100,
      });
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/25 hover:shadow-lg dark:hover:shadow-gray-900/40 transition-all duration-300 p-6 opacity-0 border dark:border-gray-700"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-200">
            Deep Work Session
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
            {formatDate(new Date(session.startTime))}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-200">
            {formatDuration(session.duration)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-200">
            {formatTime12Hour(new Date(session.startTime))} - {formatTime12Hour(new Date(session.endTime))}
          </div>
        </div>
      </div>

      {session.notes && (
        <div className="mb-3">
          <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-200">{session.notes}</p>
        </div>
      )}

      {session.tags && session.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {session.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs rounded-full transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 transition-colors duration-200">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 transition-colors duration-200">
          <span>Status: {session.completed ? 'Completed' : 'Incomplete'}</span>
          <span>ID: {session.id.slice(-8)}</span>
        </div>
      </div>
    </div>
  );
}