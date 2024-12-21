import { Program } from './index';

export interface WorkoutProgress {
  date: string;
  duration: number;
  calories: number;
  workoutType: string;
}

export interface UserStats {
  totalWorkouts: number;
  totalMinutes: number;
  totalCalories: number;
  currentStreak: number;
}

export interface UpcomingClass {
  id: string;
  title: string;
  trainer: string;
  datetime: string;
  duration: string;
}