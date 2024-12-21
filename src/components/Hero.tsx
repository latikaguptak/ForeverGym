import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Transform Your Body,
              <span className="text-pink-600 dark:text-pink-400">
                {' '}
                Empower Your Life
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Join our community of strong women and discover your true
              potential. Expert-led programs designed specifically for women who
              want to feel confident, strong, and beautiful.
            </p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/register"
                className="px-8 py-3 bg-pink-600 text-white rounded-full flex items-center gap-2 hover:bg-pink-700 transition-colors"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="#programs"
                className="px-8 py-3 border-2 border-pink-600 text-pink-600 dark:text-pink-400 dark:border-pink-400 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
              >
                View Programs
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <img
              src="https://img.freepik.com/free-vector/virtual-gym-concept_23-2148524235.jpg"
              alt="Fitness"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
