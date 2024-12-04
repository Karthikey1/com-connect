import React from 'react';
import { Tag } from 'lucide-react';
import type { RegistrationData } from '../../../types';
import { INTEREST_CATEGORIES } from '../../../constants';

interface InterestsStepProps {
  data: RegistrationData;
  onChange: (data: Partial<RegistrationData>) => void;
}

export function InterestsStep({ data, onChange }: InterestsStepProps) {
  const toggleInterest = (interest: string) => {
    const newInterests = data.interests.includes(interest)
      ? data.interests.filter((i) => i !== interest)
      : [...data.interests, interest];
    onChange({ interests: newInterests });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Tag className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-medium">Select your interests</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {INTEREST_CATEGORIES.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`p-3 rounded-lg text-sm font-medium transition-colors ${
              data.interests.includes(interest)
                ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
}