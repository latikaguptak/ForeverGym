import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Target } from 'lucide-react';
import ActivityChart from '../charts/ActivityChart';
import CaloriesChart from '../charts/CaloriesChart';

const goals = [
  {
    id: 1,
    title: 'Weekly Workouts',
    current: 3,
    target: 5,
    unit: 'sessions',
    progress: 60
  },
  {
    id: 2,
    title: 'Monthly Active Minutes',
    current: 480,
    target: 600,
    unit: 'minutes',
    progress: 80
  },
  {
    id: 3,
    title: 'Weight Goal',
    current: 68,
    target: 65,
    unit: 'kg',
    progress: 90
  }
];

export default function Progress() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Progress</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {goals.map((goal) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {goal.title}
              </h3>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-400">
                  {goal.current} / {goal.target} {goal.unit}
                </span>
                <span className="text-pink-600 dark:text-pink-400 font-semibold">
                  {goal.progress}%
                </span>
              </div>
              
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Activity Trend</h2>
            <ActivityChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Calories Burned</h2>
            <CaloriesChart />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}