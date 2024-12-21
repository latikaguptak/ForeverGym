import React from 'react';
import { motion } from 'framer-motion';
import { WorkoutProgress } from '../../types/dashboard';

const workoutHistory: WorkoutProgress[] = [
  {
    date: '2024-03-10',
    duration: 45,
    calories: 320,
    workoutType: 'HIIT'
  },
  {
    date: '2024-03-09',
    duration: 30,
    calories: 250,
    workoutType: 'Yoga'
  },
  {
    date: '2024-03-08',
    duration: 60,
    calories: 450,
    workoutType: 'Strength'
  }
];

export default function WorkoutHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6">Workout History</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-4">Date</th>
              <th className="pb-4">Workout Type</th>
              <th className="pb-4">Duration (min)</th>
              <th className="pb-4">Calories</th>
            </tr>
          </thead>
          <tbody>
            {workoutHistory.map((workout, index) => (
              <motion.tr
                key={workout.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-gray-100"
              >
                <td className="py-4">{new Date(workout.date).toLocaleDateString()}</td>
                <td className="py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-600">
                    {workout.workoutType}
                  </span>
                </td>
                <td className="py-4">{workout.duration}</td>
                <td className="py-4">{workout.calories}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}