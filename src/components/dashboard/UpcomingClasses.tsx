import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { UpcomingClass } from '../../types/dashboard';

const upcomingClasses: UpcomingClass[] = [
  {
    id: '1',
    title: 'Morning Yoga Flow',
    trainer: 'Maria Rodriguez',
    datetime: '2024-03-11T08:00:00',
    duration: '45 min'
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    trainer: 'Jessica Smith',
    datetime: '2024-03-12T17:30:00',
    duration: '30 min'
  }
];

export default function UpcomingClasses() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Classes</h2>
      <div className="space-y-4">
        {upcomingClasses.map((class_, index) => (
          <motion.div
            key={class_.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50"
          >
            <h3 className="font-semibold text-gray-900">{class_.title}</h3>
            <p className="text-sm text-gray-600 mt-1">with {class_.trainer}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(class_.datetime).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {class_.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}