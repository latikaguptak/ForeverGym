import React from 'react';
import { motion } from 'framer-motion';
import { trainers } from '../data';
import { Instagram } from 'lucide-react';

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Meet Our Trainers</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Expert guidance for your fitness journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                <p className="text-pink-300">{trainer.specialty}</p>
                <a
                  href={`https://instagram.com/${trainer.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-white hover:text-pink-300"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  {trainer.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}