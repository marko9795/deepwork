import { useState, useEffect, useRef, useCallback } from 'react';
import type { TimerState, TimerSettings, DeepWorkSession } from '../types/session';
import { useLocalStorage } from './useLocalStorage';

const DEFAULT_SETTINGS: TimerSettings = {
  workDuration: 25,
  breakDuration: 5,
  longBreakDuration: 15,
  sessionsUntilLongBreak: 4,
};

export function useTimer() {
  const [settings] = useLocalStorage<TimerSettings>('timerSettings', DEFAULT_SETTINGS);
  const [sessions, setSessions] = useLocalStorage<DeepWorkSession[]>('deepWorkSessions', []);
  
  const [timerState, setTimerState] = useState<TimerState>({
    timeLeft: settings.workDuration * 60,
    isRunning: false,
    isPaused: false,
    mode: 'work',
    sessionsCompleted: 0,
  });

  const intervalRef = useRef<number | null>(null);
  const sessionStartTimeRef = useRef<Date | null>(null);

  // Update timeLeft when settings change
  useEffect(() => {
    if (!timerState.isRunning && !timerState.isPaused) {
      setTimerState(prev => ({
        ...prev,
        timeLeft: settings.workDuration * 60,
      }));
    }
  }, [settings.workDuration, timerState.isRunning, timerState.isPaused]);

  const startTimer = useCallback(() => {
    if (!sessionStartTimeRef.current) {
      sessionStartTimeRef.current = new Date();
    }
    
    setTimerState(prev => ({
      ...prev,
      isRunning: true,
      isPaused: false,
    }));
  }, []);

  const pauseTimer = useCallback(() => {
    setTimerState(prev => ({
      ...prev,
      isRunning: false,
      isPaused: true,
    }));
  }, []);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    sessionStartTimeRef.current = null;
    
    setTimerState(prev => ({
      ...prev,
      timeLeft: settings.workDuration * 60,
      isRunning: false,
      isPaused: false,
      mode: 'work',
    }));
  }, [settings.workDuration]);

  const completeSession = useCallback(() => {
    if (sessionStartTimeRef.current && timerState.mode === 'work') {
      const endTime = new Date();
      const duration = endTime.getTime() - sessionStartTimeRef.current.getTime();
      
      const newSession: DeepWorkSession = {
        id: crypto.randomUUID(),
        startTime: sessionStartTimeRef.current,
        endTime,
        duration,
        completed: true,
      };

      setSessions(prev => [...prev, newSession]);
    }

    const newSessionsCompleted = timerState.sessionsCompleted + 1;
    const shouldTakeLongBreak = newSessionsCompleted % settings.sessionsUntilLongBreak === 0;
    
    let nextMode: TimerState['mode'] = 'work';
    let nextTimeLeft = settings.workDuration * 60;

    if (timerState.mode === 'work') {
      nextMode = shouldTakeLongBreak ? 'longBreak' : 'break';
      nextTimeLeft = shouldTakeLongBreak 
        ? settings.longBreakDuration * 60 
        : settings.breakDuration * 60;
    }

    sessionStartTimeRef.current = null;
    
    setTimerState(prev => ({
      ...prev,
      timeLeft: nextTimeLeft,
      isRunning: false,
      isPaused: false,
      mode: nextMode,
      sessionsCompleted: timerState.mode === 'work' ? newSessionsCompleted : prev.sessionsCompleted,
    }));
  }, [timerState.mode, timerState.sessionsCompleted, settings, setSessions]);

  // Timer countdown effect
  useEffect(() => {
    if (timerState.isRunning) {
      intervalRef.current = setInterval(() => {
        setTimerState(prev => {
          if (prev.timeLeft <= 1) {
            completeSession();
            return prev;
          }
          return {
            ...prev,
            timeLeft: prev.timeLeft - 1,
          };
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timerState.isRunning, completeSession]);

  return {
    timerState,
    settings,
    sessions,
    startTimer,
    pauseTimer,
    resetTimer,
    completeSession,
  };
}