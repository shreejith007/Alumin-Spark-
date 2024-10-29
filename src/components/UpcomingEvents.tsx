import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import NavigationControls from './NavigationControls';

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: 'Tech Career Fair 2024',
      date: '2024-04-15',
      time: '10:00 AM - 4:00 PM',
      location: 'University Main Campus',
      description: 'Connect with top tech companies and explore career opportunities.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80',
      attendees: 500,
      type: 'Career Fair'
    },
    {
      id: 2,
      title: 'Alumni Networking Night',
      date: '2024-04-20',
      time: '6:00 PM - 9:00 PM',
      location: 'Grand Hotel Convention Center',
      description: 'An evening of networking with successful alumni from various industries.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80',
      attendees: 200,
      type: 'Networking'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <NavigationControls />
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Upcoming Events
          </h2>

          <div className="grid gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees} attending
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </p>
                  </div>

                  <p className="mt-4 text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-6 flex justify-end">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}