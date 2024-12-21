import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkoutDetails } from '../../../types/workout';
import WorkoutStartForm from './WorkoutStartForm';

interface WorkoutStartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  workout: WorkoutDetails;
}

export default function WorkoutStartDialog({ isOpen, onClose, workout }: WorkoutStartDialogProps) {
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
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{workout.title}</h3>
                      <p className="text-sm opacity-90">{workout.duration} • {workout.level}</p>
                    </div>
                  </div>
                  <Dialog.Close className="absolute top-4 right-4 text-white hover:text-gray-200">
                    <X className="w-5 h-5" />
                  </Dialog.Close>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {workout.description}
                  </p>
                  <WorkoutStartForm onClose={onClose} workout={workout} />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  );
}