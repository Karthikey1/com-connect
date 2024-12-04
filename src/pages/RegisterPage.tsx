import React from 'react';
import { RegisterWizard } from '../components/auth/RegisterWizard';

export function RegisterPage() {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Join Urban Connect
          </h1>
          <p className="mt-2 text-gray-600">
            Create your profile and start connecting with your community
          </p>
        </div>
        <RegisterWizard />
      </div>
    </div>
  );
}