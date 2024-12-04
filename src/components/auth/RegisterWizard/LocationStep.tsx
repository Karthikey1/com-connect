import React from 'react';
import { MapPin } from 'lucide-react';
import { Input } from '../../ui/Input';
import type { RegistrationData } from '../../../types';

interface LocationStepProps {
  data: RegistrationData;
  onChange: (data: Partial<RegistrationData>) => void;
}

export function LocationStep({ data, onChange }: LocationStepProps) {
  // In a real app, we would use a map component and geocoding service
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <MapPin className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-medium">Where are you located?</h3>
      </div>
      <div className="space-y-4">
        <Input
          label="City"
          value={data.city}
          onChange={(e) => onChange({ city: e.target.value })}
          required
        />
        <div className="text-sm text-gray-500">
          This helps us show you relevant events and connections in your area.
          Your exact location will not be shared with other users.
        </div>
      </div>
    </div>
  );
}