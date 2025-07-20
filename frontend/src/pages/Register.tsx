import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';

const Register: React.FC = () => {
  const [accountType, setAccountType] = useState<'PARENT' | 'STUDENT'>('PARENT');
  const [step, setStep] = useState<'type' | 'oauth'>('type');
  const { login } = useAuthStore();

  const handleAccountTypeSelect = (type: 'PARENT' | 'STUDENT') => {
    setAccountType(type);
    setStep('oauth');
  };

  const handleOAuthLogin = (provider: string) => {
    const authUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/oauth2/authorization/${provider}?accountType=${accountType}`;
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {step === 'type' && (
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Join StudyStrike
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Are you a parent or student?
            </p>
            
            <div className="mt-8 space-y-4">
              <button
                onClick={() => handleAccountTypeSelect('PARENT')}
                className="group relative w-full flex flex-col items-center py-4 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="text-lg font-semibold">I'm a Parent</span>
                <span className="text-sm text-gray-500">Create family groups and manage rewards</span>
              </button>
              
              <button
                onClick={() => handleAccountTypeSelect('STUDENT')}
                className="group relative w-full flex flex-col items-center py-4 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="text-lg font-semibold">I'm a Student</span>
                <span className="text-sm text-gray-500">Complete quests and earn gaming rewards</span>
              </button>
            </div>
          </div>
        )}

        {step === 'oauth' && (
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up with {accountType === 'PARENT' ? 'Parent' : 'Student'} Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Choose how you'd like to sign up:
            </p>
            
            <div className="mt-8 space-y-4">
              <button
                onClick={() => handleOAuthLogin('google')}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Continue with Google
              </button>
              
              <button
                onClick={() => handleOAuthLogin('facebook')}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Continue with Facebook
              </button>
              
              <button
                onClick={() => handleOAuthLogin('discord')}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue with Discord
              </button>
            </div>
            
            <div className="text-center mt-4">
              <button
                onClick={() => setStep('type')}
                className="text-sm text-gray-600 hover:text-gray-500"
              >
                ← Back to account type selection
              </button>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register; 