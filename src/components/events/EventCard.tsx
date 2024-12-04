import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import type { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link
      to={`/events/${event.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {event.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(event.date), 'PPP p')}
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            Location coming soon
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            {event.participants.length} / {event.maxParticipants} participants
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {event.interests.slice(0, 3).map((interest) => (
            <span
              key={interest}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {interest}
            </span>
          ))}
          {event.interests.length > 3 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{event.interests.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}