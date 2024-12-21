import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Overview from './Overview';
import Schedule from './Schedule';
import Progress from './Progress';
import Workouts from './Workouts';
import Community from './Community';
import Settings from './Settings';

export default function DashboardContent() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <Routes>
        <Route index element={<Overview />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="progress" element={<Progress />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="community" element={<Community />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </main>
  );
}