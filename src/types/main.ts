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
