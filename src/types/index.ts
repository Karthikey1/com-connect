export interface User {
  id: string;
  username: string;
  email: string;
  profile: {
    fullName: string;
    bio: string;
    interests: string[];
    location: {
      type: string;
      coordinates: [number, number];
    };
    profilePicture: string;
    verificationStatus: boolean;
    privacySettings: {
      locationVisibility: 'public' | 'connections' | 'private';
      profileVisibility: 'public' | 'connections' | 'private';
      messagePreferences: 'all' | 'connections' | 'none';
    };
  };
  gamification: {
    points: number;
    badges: string[];
    eventsAttended: number;
    connectionsInitiated: number;
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  organizer: string;
  participants: Array<{
    userId: string;
    status: 'attending' | 'maybe' | 'declined';
  }>;
  interests: string[];
  maxParticipants: number;
  privacy: 'public' | 'private' | 'connections';
}

export interface RegistrationData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  interests: string[];
  city: string;
  privacySettings: {
    profileVisibility: 'public' | 'connections' | 'private';
    messagePreferences: 'all' | 'connections' | 'none';
  };
}