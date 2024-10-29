import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import AlumniDashboard from './components/AlumniDashboard';
import AlumniEvents from './components/AlumniEvents';
import AlumniDirectory from './components/AlumniDirectory';
import CodeSphere from './components/CodeSphere';
import CodingChallenge from './components/CodingChallenge';
import JobsInternships from './components/JobsInternships';
import SuccessStories from './components/SuccessStories';
import ResearchPapers from './components/ResearchPapers';
import UpcomingEvents from './components/UpcomingEvents';
import { useStore } from './store';

const App = () => {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/student-dashboard/*"
          element={
            currentUser?.type === 'student' ? (
              <StudentDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route path="code-sphere" element={<CodeSphere />} />
          <Route path="code-sphere/challenge/:id" element={<CodingChallenge />} />
          <Route path="jobs" element={<JobsInternships />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="research" element={<ResearchPapers />} />
          <Route path="events" element={<UpcomingEvents />} />
        </Route>
        <Route
          path="/alumni-dashboard"
          element={
            currentUser?.type === 'alumni' ? (
              <AlumniDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/alumni-events"
          element={
            currentUser?.type === 'alumni' ? (
              <AlumniEvents />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/alumni-directory"
          element={
            currentUser?.type === 'alumni' ? (
              <AlumniDirectory />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;