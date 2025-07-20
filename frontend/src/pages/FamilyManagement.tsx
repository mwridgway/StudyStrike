import React, { useState, useEffect } from 'react';
import { FamilyGroup, FamilyInvitation } from '../types';
import { familyService } from '../services/familyService';

const FamilyManagement: React.FC = () => {
  const [familyGroups, setFamilyGroups] = useState<FamilyGroup[]>([]);
  const [invitations, setInvitations] = useState<FamilyInvitation[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<FamilyGroup | null>(null);
  const [formData, setFormData] = useState({ name: '', description: '', email: '' });

  useEffect(() => {
    loadFamilyGroups();
    loadInvitations();
  }, []);

  const loadFamilyGroups = async () => {
    try {
      const groups = await familyService.getMyFamilyGroups();
      setFamilyGroups(groups);
    } catch (error) {
      console.error('Failed to load family groups:', error);
    }
  };

  const loadInvitations = async () => {
    try {
      const invs = await familyService.getMyInvitations();
      setInvitations(invs);
    } catch (error) {
      console.error('Failed to load invitations:', error);
    }
  };

  const createFamilyGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newGroup = await familyService.createFamilyGroup({
        name: formData.name,
        description: formData.description
      });
      setFamilyGroups([...familyGroups, newGroup]);
      setShowCreateForm(false);
      setFormData({ name: '', description: '', email: '' });
    } catch (error) {
      console.error('Failed to create family group:', error);
    }
  };

  const sendInvitation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGroup) return;
    
    try {
      const invitation = await familyService.sendInvitation({
        email: formData.email,
        familyGroupId: selectedGroup.id
      });
      setInvitations([...invitations, invitation]);
      setShowInviteForm(false);
      setSelectedGroup(null);
      setFormData({ name: '', description: '', email: '' });
    } catch (error) {
      console.error('Failed to send invitation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Family Management</h1>
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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Family Groups</h2>
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Create New Family Group
            </button>
          </div>

          {familyGroups.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-500">No family groups yet. Create your first one!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {familyGroups.map(group => (
                <div key={group.id} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.name}</h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Group Code: {group.groupCode}</p>
                  <button
                    onClick={() => {
                      setSelectedGroup(group);
                      setShowInviteForm(true);
                    }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Invite Child
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Create Family Group Modal */}
          {showCreateForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-semibold mb-4">Create Family Group</h3>
                <form onSubmit={createFamilyGroup}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Group Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Invite Child Modal */}
          {showInviteForm && selectedGroup && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg font-semibold mb-4">Invite Child to {selectedGroup.name}</h3>
                <form onSubmit={sendInvitation}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowInviteForm(false);
                        setSelectedGroup(null);
                      }}
                      className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                    >
                      Send Invitation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FamilyManagement; 