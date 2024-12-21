import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Weight, Target, Dumbbell, FileText, Play } from 'lucide-react';
import {
  workoutStartSchema,
  WorkoutStartFormData,
  WorkoutDetails,
} from '../../../types/workout';
import { showSuccessToast, showErrorToast } from '../../../utils/toast';

interface WorkoutStartFormProps {
  onClose: () => void;
  workout: WorkoutDetails;
}

const equipmentOptions = [
  'Dumbbells',
  'Resistance Bands',
  'Yoga Mat',
  'Kettlebell',
  'None (Bodyweight only)',
];

export default function WorkoutStartForm({
  onClose,
  workout,
}: WorkoutStartFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WorkoutStartFormData>({
    resolver: zodResolver(workoutStartSchema),
    defaultValues: {
      fitnessLevel: 'intermediate',
      equipment: ['None (Bodyweight only)'],
    },
  });

  const onSubmit = async (data: WorkoutStartFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Workout start data:', {
        ...data,
        workoutId: workout.id,
        workoutTitle: workout.title,
      });

      showSuccessToast("Workout started! Let's get moving!");
      onClose();
    } catch (error) {
      showErrorToast('Failed to start workout. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Your Weight (optional)
        </label>
        <div className="relative">
          <Weight className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="number"
            placeholder="Enter your weight in kg"
            {...register('weight')}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-700 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Fitness Level
        </label>
        <div className="relative">
          <Target className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            {...register('fitnessLevel')}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-700 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        {errors.fitnessLevel && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fitnessLevel.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Available Equipment
        </label>
        <div className="relative space-y-2">
          <Dumbbell className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <div className="pl-10 space-y-2">
            {equipmentOptions.map((equipment) => (
              <label key={equipment} className="flex items-center">
                <input
                  type="checkbox"
                  value={equipment}
                  {...register('equipment')}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  {equipment}
                </span>
              </label>
            ))}
          </div>
        </div>
        {errors.equipment && (
          <p className="mt-1 text-sm text-red-500">
            {errors.equipment.message}
          </p>
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
            placeholder="Any injuries, limitations, or goals..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-700 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
        {errors.notes && (
          <p className="mt-1 text-sm text-red-500">{errors.notes.message}</p>
        )}
      </div>

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
          className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Starting...
            </span>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Start Workout
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
}
