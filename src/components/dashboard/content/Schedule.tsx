import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';
import BookingDialog from '../dialogs/BookingDialog';
import { ClassBooking } from '../../../types/schedule';

const upcomingClasses = [
  {
    id: '1',
    title: 'Morning Yoga Flow',
    trainer: 'Maria Rodriguez',
    time: '08:00',
    duration: '45 min',
    date: '2024-03-15',
    participants: 12
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    trainer: 'Jessica Smith',
    time: '10:30',
    duration: '30 min',
    date: '2024-03-15',
    participants: 8
  },
  {
    id: '3',
    title: 'Strength Training',
    trainer: 'Mike Johnson',
    time: '14:00',
    duration: '60 min',
    date: '2024-03-15',
    participants: 15
  }
];

export default function Schedule() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassBooking | null>(null);

  const handleBookClass = (classDetails: ClassBooking) => {
    setSelectedClass(classDetails);
    setIsBookingOpen(true);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Class Schedule</h1>
        
        <div className="grid gap-6">
          {upcomingClasses.map((class_) => (
            <motion.div
              key={class_.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {class_.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">with {class_.trainer}</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(class_.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {class_.time} ({class_.duration})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {class_.participants} participants
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleBookClass(class_)}
                  className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
                >
                  Book Class
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedClass && (
        <BookingDialog
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          classDetails={selectedClass}
        />
      )}
    </div>
  );
}