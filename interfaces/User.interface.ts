export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username: string;
  bio?: string;
}

export interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
}

