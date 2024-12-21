import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingForm from './BookingForm';
import { ClassBooking } from '../../../types/schedule';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  classDetails: ClassBooking;
}

export default function BookingDialog({ isOpen, onClose, classDetails }: BookingDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            
            <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-md max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 focus:outline-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                  <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white">
                    Book Class
                  </Dialog.Title>
                  <Dialog.Close className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <X className="w-5 h-5" />
                  </Dialog.Close>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {classDetails.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      with {classDetails.trainer}
                    </p>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <p>Duration: {classDetails.duration}</p>
                      <p>Time: {classDetails.time}</p>
                    </div>
                  </div>

                  <BookingForm onClose={onClose} classDetails={classDetails} />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}