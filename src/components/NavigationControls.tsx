import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Home } from 'lucide-react';

export default function NavigationControls() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 mb-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-md shadow-sm hover:shadow"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
      
      <button
        onClick={() => navigate('/student-dashboard')}
        className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-md shadow-sm hover:shadow"
      >
        <Home className="w-4 h-4" />
        Dashboard
      </button>

      <button
        onClick={() => window.location.reload()}
        className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-md shadow-sm hover:shadow"
      >
        <RotateCcw className="w-4 h-4" />
        Reload
      </button>
    </div>
  );
}