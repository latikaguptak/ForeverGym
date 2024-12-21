import React from 'react';
import { Menu, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';
import UserMenu from './UserMenu';
import NotificationsMenu from './NotificationsMenu';
import { User } from '../../../types/auth';

interface DashboardHeaderProps {
  user: User | null;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function DashboardHeader({ user, toggleSidebar, isSidebarOpen }: DashboardHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center px-4 justify-between">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>

        <NotificationsMenu />
        <UserMenu user={user} />
      </div>
    </header>
  );
}