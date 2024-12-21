import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Calendar, Trophy } from 'lucide-react';

const stats = {
  totalWorkouts: 24,
  totalMinutes: 720,
  totalCalories: 8500,
  currentStreak: 5,
};

export default function DashboardStats() {
  const statItems = [
    {
      label: 'Total Workouts',
      value: stats.totalWorkouts,
      icon: Activity,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Minutes Active',
      value: stats.totalMinutes,
      icon: Calendar,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Calories Burned',
      value: stats.totalCalories,
      icon: Flame,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    {
      label: 'Day Streak',
      value: stats.currentStreak,
      icon: Trophy,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <>
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm dark:bg-gray-800 dark:text-white"
        >
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${item.bgColor}`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
