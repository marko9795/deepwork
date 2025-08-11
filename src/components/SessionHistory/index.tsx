import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import type { DeepWorkSession } from '../../types/session';
import { SessionCard } from './SessionCard';
import { SessionStats } from './SessionStats';

export function SessionHistory() {
  const [sessions] = useLocalStorage<DeepWorkSession[]>('deepWorkSessions', []);
  const [filter, setFilter] = useState<'all' | 'today' | 'week' | 'month'>('all');

  const getFilteredSessions = () => {
    const now = new Date();
    const completedSessions = sessions.filter(s => s.completed);

    switch (filter) {
      case 'today': {
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        return completedSessions.filter(s => new Date(s.startTime) >= todayStart);
      }
      case 'week': {
        const weekStart = new Date(now.getTime() - (now.getDay() * 24 * 60 * 60 * 1000));
        weekStart.setHours(0, 0, 0, 0);
        return completedSessions.filter(s => new Date(s.startTime) >= weekStart);
      }
      case 'month': {
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        return completedSessions.filter(s => new Date(s.startTime) >= monthStart);
      }
      default:
        return completedSessions;
    }
  };

  const filteredSessions = getFilteredSessions().sort(
    (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Session History</h1>
          <p className="text-gray-600">Track your deep work progress and achievements</p>
        </div>

        {/* Stats */}
        <SessionStats sessions={sessions} />

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {(['all', 'today', 'week', 'month'] as const).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === filterOption
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>

        {/* Sessions list */}
        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session, index) => (
              <SessionCard
                key={session.id}
                session={session}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No sessions yet</h3>
            <p className="text-gray-500">
              {filter === 'all' 
                ? 'Start your first deep work session to see it here!'
                : `No sessions found for the selected ${filter} period.`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}