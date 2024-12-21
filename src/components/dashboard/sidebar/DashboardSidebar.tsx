import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Activity, 
  Users, 
  Settings,
  Dumbbell,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
  { icon: Activity, label: 'Progress', path: '/dashboard/progress' },
  { icon: Dumbbell, label: 'Workouts', path: '/dashboard/workouts' },
  { icon: Users, label: 'Community', path: '/dashboard/community' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export default function DashboardSidebar({ isOpen, onClose, isMobile }: DashboardSidebarProps) {
  const location = useLocation();

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: isMobile ? "-100%" : 0,
      opacity: isMobile ? 0 : 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Mobile overlay */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
          )}

          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen ${
              isMobile 
                ? 'fixed left-0 top-0 w-[280px] z-50' 
                : 'sticky top-0 w-[280px]'
            } overflow-y-auto`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Dumbbell className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">FitGlow</span>
                </div>
                {isMobile && (
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                )}
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={isMobile ? onClose : undefined}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors relative ${
                        isActive
                          ? 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 w-1 h-8 bg-pink-600 dark:bg-pink-400 rounded-r-full"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}