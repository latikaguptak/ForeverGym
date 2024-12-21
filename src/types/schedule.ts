import { z } from 'zod';

export const bookingSchema = z.object({
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().max(200, 'Notes must be less than 200 characters').optional(),
  agreesToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions'
  })
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export interface ClassBooking {
  id: string;
  title: string;
  trainer: string;
  time: string;
  duration: string;
  date: string;
}