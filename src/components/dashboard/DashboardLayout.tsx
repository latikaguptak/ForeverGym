import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/auth';
import DashboardSidebar from './sidebar/DashboardSidebar';
import DashboardHeader from './header/DashboardHeader';
import DashboardContent from './content/DashboardContent';
import { DashboardProvider } from '../../contexts/DashboardContext';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
        <DashboardSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          isMobile={isMobile}
        />

        <div className="flex-1 flex flex-col">
          <DashboardHeader
            user={user}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="p-6">
            <DashboardContent />
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
