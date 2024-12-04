import React from 'react';
import { MapPin, Users, Calendar } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function HomePage() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className="space-y-8">
      {isAuthenticated ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-indigo-600" />
              Suggested Connections
            </h2>
            <p className="text-gray-600">No suggestions yet</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
              Upcoming Events
            </h2>
            <p className="text-gray-600">No upcoming events</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
              Nearby Activities
            </h2>
            <p className="text-gray-600">No nearby activities</p>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Connect with your urban community
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join Urban Connect to discover local events, meet like-minded people,
            and build meaningful connections in your city.
          </p>
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200"
            alt="Urban community"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      )}
    </div>
  );
}