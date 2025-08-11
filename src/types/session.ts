export interface DeepWorkSession {
  id: string;
  startTime: Date;
  endTime: Date;
  duration: number; // in milliseconds
  notes?: string;
  tags?: string[];
  completed: boolean;
}

export interface TimerSettings {
  workDuration: number; // in minutes
  breakDuration: number; // in minutes
  longBreakDuration: number; // in minutes
  sessionsUntilLongBreak: number;
}

export interface TimerState {
  timeLeft: number; // in seconds
  isRunning: boolean;
  isPaused: boolean;
  mode: 'work' | 'break' | 'longBreak';
  sessionsCompleted: number;
}