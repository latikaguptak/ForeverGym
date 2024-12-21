import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Bell } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'New class available',
    message: 'Morning Yoga Flow starts in 30 minutes',
    time: '5 min ago',
  },
  {
    id: 2,
    title: 'Workout completed',
    message: 'Great job! You have completed your HIIT workout',
    time: '1 hour ago',
  },
  {
    id: 3,
    title: 'Achievement unlocked',
    message: 'You have reached your weekly workout goal!',
    time: '2 hours ago',
  },
];

export default function NotificationsMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Open notifications menu"
        >
          <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 animate-scale-in"
          sideOffset={5}
        >
          <DropdownMenu.Arrow className="fill-gray-800 dark:fill-gray-700" />
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Notifications
            </h3>
          </div>

          {notifications.length > 0 ? (
            <div className="max-h-[300px] overflow-y-auto">
              {notifications.map((notification) => (
                <DropdownMenu.Item
                  key={notification.id}
                  className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {notification.message}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {notification.time}
                  </span>
                </DropdownMenu.Item>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              No new notifications
            </div>
          )}

          <div className="p-2 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full text-center text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300">
              View all notifications
            </button>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
