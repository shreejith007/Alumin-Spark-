import React, { useState } from 'react';
import { useStore } from '../store';
import { LogOut, Search, MapPin } from 'lucide-react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import Map from './Map';
import Chat from './Chat';
import Navbar from './Navbar';

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlumni, setSelectedAlumni] = useState<string | null>(null);
  const { currentUser, users } = useStore();
  const navigate = useNavigate();

  const alumni = users.filter((user) => user.type === 'alumni');
  const filteredAlumni = alumni.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.expertise?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    useStore.getState().setCurrentUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Student Dashboard</h1>
          <div className="flex items-center gap-4">
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

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
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
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {alumni.location?.city}, {alumni.location?.country}
                  </div>
                  <p className="text-gray-600">{alumni.email}</p>
                  <p className="text-gray-600">{alumni.phone}</p>
                  <a
                    href={alumni.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-gray-900">Area of Expertise</h4>
                  <p className="text-gray-600">{alumni.expertise}</p>
                </div>

                <button
                  onClick={() => setSelectedAlumni(alumni.id)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Chat Now
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4" style={{ height: '400px' }}>
              <h2 className="text-lg font-semibold mb-4">Alumni Near You</h2>
              <Map users={alumni} />
            </div>
          </div>
        </div>

        {selectedAlumni && (
          <div className="fixed bottom-4 right-4 w-96 z-50">
            <Chat
              roomId={`${currentUser?.id}-${selectedAlumni}`}
              otherUserId={selectedAlumni}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;