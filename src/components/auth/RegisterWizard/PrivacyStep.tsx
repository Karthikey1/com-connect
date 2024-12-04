import React from 'react';
import { Shield } from 'lucide-react';
import type { RegistrationData } from '../../../types';

interface PrivacyStepProps {
  data: RegistrationData;
  onChange: (data: Partial<RegistrationData>) => void;
}

export function PrivacyStep({ data, onChange }: PrivacyStepProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Shield className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-medium">Privacy Settings</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Profile Visibility
          </label>
          <select
            value={data.privacySettings.profileVisibility}
            onChange={(e) =>
              onChange({
                privacySettings: {
                  ...data.privacySettings,
                  profileVisibility: e.target.value as 'public' | 'connections' | 'private',
                },
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="public">Public</option>
            <option value="connections">Connections Only</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Message Preferences
          </label>
          <select
            value={data.privacySettings.messagePreferences}
            onChange={(e) =>
              onChange({
                privacySettings: {
                  ...data.privacySettings,
                  messagePreferences: e.target.value as 'all' | 'connections' | 'none',
                },
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Allow messages from everyone</option>
            <option value="connections">Connections only</option>
            <option value="none">No messages</option>
          </select>
        </div>
      </div>
    </div>
  );
}