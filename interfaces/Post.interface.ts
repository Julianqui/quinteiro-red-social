import { IUser } from './User.interface';
import { IComment } from './Comment.interface';

export interface IPost {
  id: string;
  author: IUser;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  createdAt: string;
  likes: string[]; // Array de IDs de usuarios
  favorites: string[]; // Array de IDs de usuarios
  shares: number;
  comments: IComment[];
}

export interface IPostsState {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}

