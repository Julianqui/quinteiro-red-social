import { IUser } from './User.interface';

export interface IComment {
  id: string;
  author: IUser;
  content: string;
  postId: string;
  createdAt: string;
  likes: string[]; // Array de IDs de usuarios
}

