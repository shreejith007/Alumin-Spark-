import React, { useState } from 'react';
import { useStore } from '../store';
import { LogOut, Search, GraduationCap, Trophy, Calendar } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Chat from './Chat';
import NavigationControls from './NavigationControls';
import { alumniData } from '../data/alumniData';
import { alumniEvents } from '../data/alumniEvents';

export default function AlumniDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const { currentUser } = useStore();
  const navigate = useNavigate();

  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    useStore.getState().setCurrentUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Alumni Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link 
              to="/alumni-events" 
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Events
            </Link>
            <Link 
              to="/alumni-directory" 
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Alumni Directory
            </Link>
            <span className="text-gray-600">{currentUser?.name}</span>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <NavigationControls />
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search alumni by name, company, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{alumni.name}</h3>
                  <p className="text-gray-600">
                    {alumni.position} at {alumni.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-gray-600">Batch: {alumni.batch}</p>
                <p className="text-gray-600">Department: {alumni.department}</p>
                <p className="text-gray-600">Location: {alumni.location}</p>
                <p className="text-gray-600">Email: {alumni.email}</p>
                <p className="text-gray-600">Phone: {alumni.phone}</p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-900">Area of Expertise</h4>
                <p className="text-gray-600">{alumni.expertise}</p>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-900">Domain Experience</h4>
                <p className="text-gray-600">{alumni.domainExperience}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedStudent && (
          <div className="fixed bottom-4 right-4 w-96">
            <Chat
              roomId={`${currentUser?.id}-${selectedStudent}`}
              otherUserId={selectedStudent}
            />
          </div>
        )}
      </main>
    </div>
  );
}