import React from 'react';
import { motion } from 'framer-motion';
import { programs } from '../data';
import { Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Programs() {
  const navigate = useNavigate();

  return (
    <section id="programs" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Programs</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Choose the perfect program for your fitness journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{program.description}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center text-pink-600 dark:text-pink-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-purple-600 dark:text-purple-400">
                    <Target className="w-4 h-4 mr-1" />
                    <span className="text-sm">{program.level}</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate(`/program/${program.id}`)}
                  className="mt-6 w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}