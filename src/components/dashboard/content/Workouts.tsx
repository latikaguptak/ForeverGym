import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Dumbbell } from 'lucide-react';
import WorkoutStartDialog from '../dialogs/WorkoutStartDialog';
import { WorkoutDetails } from '../../../types/workout';

const workouts = [
  {
    id: 1,
    title: 'Full Body HIIT',
    description: 'High-intensity interval training targeting all major muscle groups',
    duration: '30 min',
    level: 'Intermediate',
    category: 'HIIT',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Yoga Flow',
    description: 'Energizing morning yoga flow to improve flexibility and mindfulness',
    duration: '45 min',
    level: 'All Levels',
    category: 'Yoga',
    image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Strength Training',
    description: 'Build muscle and improve strength with this comprehensive workout',
    duration: '60 min',
    level: 'Advanced',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80'
  }
];

export default function Workouts() {
  const [isStartWorkoutOpen, setIsStartWorkoutOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutDetails | null>(null);

  const handleStartWorkout = (workout: WorkoutDetails) => {
    setSelectedWorkout(workout);
    setIsStartWorkoutOpen(true);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Workout Library</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {workout.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {workout.description}
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {workout.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {workout.level}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Dumbbell className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {workout.category}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleStartWorkout(workout)}
                  className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
                >
                  Start Workout
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedWorkout && (
        <WorkoutStartDialog
          isOpen={isStartWorkoutOpen}
          onClose={() => setIsStartWorkoutOpen(false)}
          workout={selectedWorkout}
        />
      )}
    </div>
  );
}