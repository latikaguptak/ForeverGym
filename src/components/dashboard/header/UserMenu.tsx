import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LogOut, Settings, User as UserIcon } from 'lucide-react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userState, isAuthenticatedState } from '../../../store/auth';
import { User } from '../../../types/auth';
import { showSuccessToast } from '../../../utils/toast';

interface UserMenuProps {
  user: User | null;
}

export default function UserMenu({ user }: UserMenuProps) {
  const setUser = useSetRecoilState(userState);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    showSuccessToast('Successfully logged out!');
    navigate('/');
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
            {user?.name.charAt(0)}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {user?.name}
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[200px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 animate-scale-in"
          sideOffset={5}
        >
          <DropdownMenu.Item className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-200">Profile</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-200">Settings</span>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-gray-200 dark:bg-gray-700 my-1" />

          <DropdownMenu.Item 
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-500">Logout</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}