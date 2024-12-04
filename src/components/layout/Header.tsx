import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Urban Connect</span>
            </Link>
          </div>

          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Bell className="h-6 w-6 text-gray-500" />
                </button>
                <Link
                  to="/profile"
                  className="ml-3 p-2 rounded-full hover:bg-gray-100"
                >
                  {user?.profile.profilePicture ? (
                    <img
                      src={user.profile.profilePicture}
                      alt={user.profile.fullName}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <UserIcon className="h-6 w-6 text-gray-500" />
                  )}
                </Link>
              </>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <button className="ml-3 p-2 rounded-full hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}