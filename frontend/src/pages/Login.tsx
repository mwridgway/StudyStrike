import React from 'react';
import { useAuthStore } from '../store/authStore';

const Login: React.FC = () => {
  const { login } = useAuthStore();

  const handleOAuthLogin = (provider: string) => {
    login(provider);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome back to StudyStrike
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to continue earning StudyCoins!
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <button
            onClick={() => handleOAuthLogin('google')}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in with Google
          </button>
          
          <button
            onClick={() => handleOAuthLogin('facebook')}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in with Facebook
          </button>
          
          <button
            onClick={() => handleOAuthLogin('discord')}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in with Discord
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="font-medium text-primary-600 hover:text-primary-500">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 