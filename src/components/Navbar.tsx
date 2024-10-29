import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Briefcase, BookOpen, Trophy, Users, Calendar } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 h-16">
          <Link
            to="/student-dashboard"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive('/student-dashboard')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Users className="w-4 h-4 mr-2" />
            Alumni Connect
          </Link>
          
          <Link
            to="/student-dashboard/code-sphere"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive('/student-dashboard/code-sphere')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Code className="w-4 h-4 mr-2" />
            CodeSphere
          </Link>

          <Link
            to="/student-dashboard/jobs"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive('/student-dashboard/jobs')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Jobs & Internships
          </Link>

          <Link
            to="/student-dashboard/success-stories"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive('/student-dashboard/success-stories')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Trophy className="w-4 h-4 mr-2" />
            Success Stories
          </Link>

          <Link
            to="/student-dashboard/research"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive('/student-dashboard/research')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Research Papers
          </Link>

          <Link
            to="/student-dashboard/events"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive('/student-dashboard/events')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}