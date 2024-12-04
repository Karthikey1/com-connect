import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { BasicInfoStep } from './BasicInfoStep';
import { InterestsStep } from './InterestsStep';
import { LocationStep } from './LocationStep';
import { PrivacyStep } from './PrivacyStep';
import { useAuthStore } from '../../../store/authStore';
import type { RegistrationData } from '../../../types';

const STEPS = ['Basic Info', 'Interests', 'Location', 'Privacy'];

export function RegisterWizard() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<RegistrationData>({
    fullName: '',
    username: '',
    email: '',
    password: '',
    interests: [],
    city: '',
    privacySettings: {
      profileVisibility: 'public',
      messagePreferences: 'all',
    },
  });

  const updateData = (newData: Partial<RegistrationData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // TODO: Implement actual API call
      login({
        id: '1',
        username: data.username,
        email: data.email,
        profile: {
          fullName: data.fullName,
          bio: '',
          interests: data.interests,
          location: { type: 'Point', coordinates: [0, 0] },
          profilePicture: '',
          verificationStatus: false,
          privacySettings: {
            locationVisibility: 'public',
            profileVisibility: data.privacySettings.profileVisibility,
            messagePreferences: data.privacySettings.messagePreferences,
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
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BasicInfoStep data={data} onChange={updateData} />;
      case 1:
        return <InterestsStep data={data} onChange={updateData} />;
      case 2:
        return <LocationStep data={data} onChange={updateData} />;
      case 3:
        return <PrivacyStep data={data} onChange={updateData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {STEPS.map((step, index) => (
            <div
              key={step}
              className={`flex items-center ${
                index < STEPS.length - 1 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 ${
                    index < currentStep ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold">{STEPS[currentStep]}</h2>
      </div>

      {renderStep()}

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
          icon={<ChevronLeft className="w-4 h-4" />}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          icon={<ChevronRight className="w-4 h-4" />}
        >
          {currentStep === STEPS.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
}