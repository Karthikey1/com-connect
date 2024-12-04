import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual API call
    login({
      id: '1',
      username: 'demo_user',
      email,
      profile: {
        fullName: 'Demo User',
        bio: '',
        interests: [],
        location: { type: 'Point', coordinates: [0, 0] },
        profilePicture: '',
        verificationStatus: false,
        privacySettings: {
          locationVisibility: 'public',
          profileVisibility: 'public',
          messagePreferences: 'all',
        },
      },
      gamification: {
        points: 0,
        badges: [],
        eventsAttended: 0,
        connectionsInitiated: 0,
      },
    });
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" icon={<LogIn className="w-4 h-4" />}>
          Log In
        </Button>
      </form>
    </div>
  );
}