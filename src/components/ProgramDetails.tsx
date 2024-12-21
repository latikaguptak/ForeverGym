import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Target, Dumbbell, Calendar, CheckCircle } from 'lucide-react';
import { programs } from '../data';
import { showSuccessToast } from '../utils/toast';

export default function ProgramDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = programs.find(p => p.id === Number(id));

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Program not found</h2>
          <button
            onClick={() => navigate('/programs')}
            className="mt-4 inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  const highlights = [
    { icon: Clock, text: program.duration },
    { icon: Target, text: program.level },
    { icon: Dumbbell, text: '3 workouts/week' },
    { icon: Calendar, text: 'Flexible schedule' },
  ];

  const features = [
    'Personalized workout plans',
    'Video demonstrations',
    'Progress tracking',
    'Nutrition guidance',
    'Community support',
    'Expert coaching',
  ];

  const handleJoinProgram = () => {
    showSuccessToast('Successfully joined the program!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/programs')}
          className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Programs
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{program.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">{program.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <item.icon className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleJoinProgram}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors text-lg font-semibold"
            >
              Join Program
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}