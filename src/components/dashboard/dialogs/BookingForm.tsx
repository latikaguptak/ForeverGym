import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Calendar, Clock, FileText } from 'lucide-react';
import { bookingSchema, BookingFormData, ClassBooking } from '../../../types/schedule';
import { showSuccessToast, showErrorToast } from '../../../utils/toast';

interface BookingFormProps {
  onClose: () => void;
  classDetails: ClassBooking;
}

export default function BookingForm({ onClose, classDetails }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: classDetails.date,
      time: classDetails.time,
      notes: '',
      agreesToTerms: false
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Booking data:', {
        ...data,
        classId: classDetails.id,
        className: classDetails.title,
        trainer: classDetails.trainer
      });
      
      showSuccessToast('Class booked successfully!');
      onClose();
    } catch (error) {
      showErrorToast('Failed to book class. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Date
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="date"
            {...register('date')}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-700 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
        {errors.date && (
          <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Time
        </label>
        <div className="relative">
          <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="time"
            {...register('time')}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-700 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
        {errors.time && (
          <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Additional Notes
        </label>
        <div className="relative">
          <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            {...register('notes')}
            rows={3}
            placeholder="Any special requirements or notes..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-700 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
        {errors.notes && (
          <p className="mt-1 text-sm text-red-500">{errors.notes.message}</p>
        )}
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          {...register('agreesToTerms')}
          className="mt-1 h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
          I agree to the terms and conditions
        </label>
      </div>
      {errors.agreesToTerms && (
        <p className="text-sm text-red-500">{errors.agreesToTerms.message}</p>
      )}

      <div className="flex gap-4">
        <motion.button
          type="button"
          onClick={onClose}
          whileTap={{ scale: 0.95 }}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Cancel
        </motion.button>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.95 }}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Booking...
            </span>
          ) : (
            'Book Now'
          )}
        </motion.button>
      </div>
    </form>
  );
}