import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { EventCard } from '../components/events/EventCard';
import { INTEREST_CATEGORIES } from '../constants';

// Mock data for demonstration
const MOCK_EVENTS = [
  {
    id: '1',
    title: 'Tech Meetup: Web Development',
    description: 'Join us for an evening of web development discussions and networking.',
    category: 'Technology',
    date: '2024-03-20T18:00:00.000Z',
    location: { type: 'Point', coordinates: [0, 0] },
    organizer: 'user1',
    participants: [{ userId: 'user1', status: 'attending' }],
    interests: ['Technology', 'Professional Networking', 'Education'],
    maxParticipants: 50,
    privacy: 'public',
  },
  {
    id: '2',
    title: 'Morning Yoga in the Park',
    description: 'Start your day with a refreshing yoga session in the park.',
    category: 'Health & Wellness',
    date: '2024-03-21T08:00:00.000Z',
    location: { type: 'Point', coordinates: [0, 0] },
    organizer: 'user2',
    participants: [
      { userId: 'user2', status: 'attending' },
      { userId: 'user3', status: 'maybe' },
    ],
    interests: ['Health & Wellness', 'Sports & Fitness', 'Outdoor Activities'],
    maxParticipants: 20,
    privacy: 'public',
  },
] as const;

export function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredEvents = MOCK_EVENTS.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        <Link to="/events/create">
          <Button icon={<Plus className="w-4 h-4" />}>Create Event</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
            <div>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                    !selectedCategory
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  All Categories
                </button>
                {INTEREST_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedCategory === category
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}