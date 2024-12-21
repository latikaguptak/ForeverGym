import { z } from 'zod';

export const workoutStartSchema = z.object({
  weight: z.string().optional(),
  fitnessLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  equipment: z.array(z.string()).min(1, 'Select at least one equipment'),
  notes: z.string().max(200, 'Notes must be less than 200 characters').optional()
});

export type WorkoutStartFormData = z.infer<typeof workoutStartSchema>;

export interface WorkoutDetails {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  image: string;
}