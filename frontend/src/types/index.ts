export interface User {
  id: number;
  email: string;
  name: string;
  role: 'PARENT' | 'STUDENT' | 'ADMIN';
  isActive: boolean;
  emailVerified: boolean;
  familyGroup?: FamilyGroup;
  createdDate: string;
  updatedDate: string;
}

export interface FamilyGroup {
  id: number;
  name: string;
  description: string;
  groupCode: string;
  members: User[];
  createdDate: string;
  updatedDate: string;
}

export interface FamilyInvitation {
  id: number;
  familyGroup: FamilyGroup;
  parent: User;
  invitedEmail: string;
  invitedUser?: User;
  invitationToken: string;
  status: 'PENDING' | 'ACCEPTED' | 'EXPIRED' | 'CANCELLED';
  expiresAt: string;
  acceptedAt?: string;
  createdDate: string;
}

export interface Quest {
  id: number;
  name: string;
  description: string;
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'TERM' | 'ANNUAL';
  studyCoins: number;
  subject: Subject;
  completionCriteria: string;
  expiresAt: string;
  isActive: boolean;
  createdDate: string;
}

export interface Subject {
  id: number;
  name: string;
  description: string;
  color: string;
  isActive: boolean;
  createdDate: string;
}

export interface StudyCoins {
  id: number;
  user: User;
  balance: number;
  totalEarned: number;
  totalSpent: number;
  lastUpdated: string;
}

export interface RegistrationRequest {
  accountType: 'PARENT' | 'STUDENT';
  email: string;
  name: string;
  oauthProvider: string;
  oauthProviderId: string;
}

export interface FamilyGroupRequest {
  name: string;
  description: string;
}

export interface InvitationRequest {
  email: string;
  familyGroupId: number;
}

export interface LoginResponse {
  user: User;
  token: string;
} 