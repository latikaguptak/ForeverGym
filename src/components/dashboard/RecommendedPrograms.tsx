import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { programs } from '../../data';

export default function RecommendedPrograms() {
  const recommendedPrograms = programs.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended For You</h2>
      <div className="space-y-4">
        {recommendedPrograms.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-32 rounded-lg overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold">{program.title}</h3>
                  <p className="text-white/80 text-sm">{program.duration}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <button className="mt-6 w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors flex items-center justify-center gap-2">
        View All Programs
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}