import React, { useState, useEffect } from 'react';
import { FamilyInvitation } from '../types';
import { familyService } from '../services/familyService';

const InvitationCenter: React.FC = () => {
  const [invitations, setInvitations] = useState<FamilyInvitation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadInvitations();
  }, []);

  const loadInvitations = async () => {
    try {
      const invs = await familyService.getMyInvitations();
      setInvitations(invs);
    } catch (error) {
      console.error('Failed to load invitations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const acceptInvitation = async (invitationId: number) => {
    try {
      await familyService.acceptInvitation(invitationId);
      setInvitations(invitations.filter(inv => inv.id !== invitationId));
      // Show success message
    } catch (error) {
      console.error('Failed to accept invitation:', error);
    }
  };

  const declineInvitation = async (invitationId: number) => {
    try {
      await familyService.declineInvitation(invitationId);
      setInvitations(invitations.filter(inv => inv.id !== invitationId));
    } catch (error) {
      console.error('Failed to decline invitation:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Family Invitations</h1>
            </div>
            <div className="flex items-center">
              <a
                href="/dashboard"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Back to Dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pending Invitations</h2>
          
          {invitations.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-500">No pending invitations</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {invitations.map(invitation => (
                <div key={invitation.id} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Invitation from {invitation.parent.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Join family group: {invitation.familyGroup.name}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Expires: {new Date(invitation.expiresAt).toLocaleDateString()}
                  </p>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={() => acceptInvitation(invitation.id)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => declineInvitation(invitation.id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InvitationCenter; 