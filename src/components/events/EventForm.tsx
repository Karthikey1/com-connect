import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { INTEREST_CATEGORIES } from '../../constants';
import type { Event } from '../../types';

interface EventFormProps {
  onSubmit: (event: Omit<Event, 'id' | 'organizer' | 'participants'>) => void;
}

export function EventForm({ onSubmit }: EventFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: INTEREST_CATEGORIES[0],
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '19:00',
    maxParticipants: 20,
    interests: [] as string[],
    privacy: 'public' as Event['privacy'],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      date: `${formData.date}T${formData.time}:00.000Z`,
      location: {
        type: 'Point',
        coordinates: [0, 0], // TODO: Implement map selection
      },
      interests: formData.interests,
      maxParticipants: formData.maxParticipants,
      privacy: formData.privacy,
    });
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          label="Event Title"
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          rows={4}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, category: e.target.value }))
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {INTEREST_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Privacy
          </label>
          <select
            value={formData.privacy}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                privacy: e.target.value as Event['privacy'],
              }))
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="public">Public</option>
            <option value="connections">Connections Only</option>
            <option value="private">Private</option>
          </select>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Calendar className="w-4 h-4 text-gray-500" />
            <label className="block text-sm font-medium text-gray-700">Date</label>
          </div>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
            required
          />
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <label className="block text-sm font-medium text-gray-700">Time</label>
          </div>
          <Input
            type="time"
            value={formData.time}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, time: e.target.value }))
            }
            required
          />
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Users className="w-4 h-4 text-gray-500" />
            <label className="block text-sm font-medium text-gray-700">
              Maximum Participants
            </label>
          </div>
          <Input
            type="number"
            min="1"
            value={formData.maxParticipants}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                maxParticipants: parseInt(e.target.value),
              }))
            }
            required
          />
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-1">
            <MapPin className="w-4 h-4 text-gray-500" />
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
          </div>
          <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center">
            Map selection coming soon
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Related Interests
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {INTEREST_CATEGORIES.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`p-2 rounded text-sm font-medium transition-colors ${
                formData.interests.includes(interest)
                  ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full">
        Create Event
      </Button>
    </form>
  );
}