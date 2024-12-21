import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../types/contact';
import { showSuccessToast, showErrorToast } from '../utils/toast';
import type { z } from 'zod';

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data:', data);
      showSuccessToast('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      showErrorToast('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">hello@fitglow.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  123 Fitness Street<br />Wellness City, WC 12345
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div>
              <input
                {...register('name')}
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
                } dark:focus:ring-pink-900 outline-none transition-colors dark:bg-gray-700 dark:text-white`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
                } dark:focus:ring-pink-900 outline-none transition-colors dark:bg-gray-700 dark:text-white`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register('message')}
                placeholder="Your Message"
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
                } dark:focus:ring-pink-900 outline-none transition-colors dark:bg-gray-700 dark:text-white`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}