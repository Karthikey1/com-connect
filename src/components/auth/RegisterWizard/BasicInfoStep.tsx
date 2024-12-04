import React from 'react';
import { Input } from '../../ui/Input';
import type { RegistrationData } from '../../../types';

interface BasicInfoStepProps {
  data: RegistrationData;
  onChange: (data: Partial<RegistrationData>) => void;
}

export function BasicInfoStep({ data, onChange }: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <Input
          label="Full Name"
          value={data.fullName}
          onChange={(e) => onChange({ fullName: e.target.value })}
          required
        />
      </div>
      <div>
        <Input
          label="Username"
          value={data.username}
          onChange={(e) => onChange({ username: e.target.value })}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          label="Email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          required
        />
      </div>
      <div>
        <Input
          type="password"
          label="Password"
          value={data.password}
          onChange={(e) => onChange({ password: e.target.value })}
          required
        />
      </div>
    </div>
  );
}