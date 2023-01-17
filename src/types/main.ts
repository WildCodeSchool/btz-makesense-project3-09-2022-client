import { string } from "zod";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImpactedUser extends User {
  isExpert: boolean;
}

export type TDecision = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  benefits: string;
  details: string;
  risks: string;
  deadline: string;
  impact: string;
  context: string;
  userId: string;
};

export interface IDecisiontWithUser extends TDecision {
  user: User;
}

export type TStatus = {
  id: string;
  content: string;
  decisionId: string;
  order: number;
  name: string;
};
