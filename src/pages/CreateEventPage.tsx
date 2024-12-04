import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EventForm } from '../components/events/EventForm';
import type { Event } from '../types';

export function CreateEventPage() {
  const navigate = useNavigate();

  const handleCreateEvent = (eventData: Omit<Event, 'id' | 'organizer' | 'participants'>) => {
    // TODO: Implement API call
    console.log('Creating event:', eventData);
    navigate('/events');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create an Event</h1>
        <p className="mt-2 text-gray-600">
          Share your interests with the community by organizing an event
        </p>
      </div>

      <div className="bg-white shadow-sm rounded-lg p-6">
        <EventForm onSubmit={handleCreateEvent} />
      </div>
    </div>
  );
}