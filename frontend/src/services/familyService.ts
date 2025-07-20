import axios from 'axios';
import { FamilyGroup, FamilyInvitation, FamilyGroupRequest, InvitationRequest } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const familyService = {
  createFamilyGroup: async (request: FamilyGroupRequest): Promise<FamilyGroup> => {
    const response = await api.post('/api/family/groups', request);
    return response.data;
  },

  getMyFamilyGroups: async (): Promise<FamilyGroup[]> => {
    const response = await api.get('/api/family/groups');
    return response.data;
  },

  sendInvitation: async (request: InvitationRequest): Promise<FamilyInvitation> => {
    const response = await api.post('/api/family/invitations', request);
    return response.data;
  },

  getMyInvitations: async (): Promise<FamilyInvitation[]> => {
    const response = await api.get('/api/family/invitations');
    return response.data;
  },

  acceptInvitation: async (invitationId: number): Promise<string> => {
    const response = await api.post(`/api/family/invitations/${invitationId}/accept`);
    return response.data;
  },

  declineInvitation: async (invitationId: number): Promise<string> => {
    const response = await api.post(`/api/family/invitations/${invitationId}/decline`);
    return response.data;
  },

  cancelInvitation: async (invitationId: number): Promise<string> => {
    const response = await api.delete(`/api/family/invitations/${invitationId}`);
    return response.data;
  },
}; 