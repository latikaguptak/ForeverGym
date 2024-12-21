import React from 'react';
import { motion } from 'framer-motion';
import DashboardStats from '../DashboardStats';
import ActivityChart from '../charts/ActivityChart';
import CaloriesChart from '../charts/CaloriesChart';
import WorkoutDistribution from '../charts/WorkoutDistribution';
import UpcomingClasses from '../UpcomingClasses';
import RecommendedPrograms from '../RecommendedPrograms';

export default function Overview() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <DashboardStats />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Activity Overview</h2>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2"
        >
          <WorkoutDistribution />
        </motion.div>
        <div className="space-y-6">
          <UpcomingClasses />
          <RecommendedPrograms />
        </div>
      </div>
    </div>
  );
}