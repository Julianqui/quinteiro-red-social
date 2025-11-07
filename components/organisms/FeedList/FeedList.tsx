'use client';

import React from 'react';
import { PostCard } from '@/components/molecules';
import { IPost, IUser } from '@/interfaces';

interface IFeedListProps {
  posts: IPost[];
  currentUser?: IUser;
  onLike: (postId: string) => void;
  onFavorite: (postId: string) => void;
  onShare: (postId: string) => void;
  onAddComment: (postId: string, content: string) => void;
  onLikeComment: (postId: string, commentId: string) => void;
  loading?: boolean;
  className?: string;
}

export const FeedList: React.FC<IFeedListProps> = ({
  posts,
  currentUser,
  onLike,
  onFavorite,
  onShare,
  onAddComment,
  onLikeComment,
  loading = false,
  className = '',
}) => {
  if (loading) {
    return (
      <div className={`flex justify-center items-center py-12 ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-12 text-center ${className}`}>
        <svg
          className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No hay publicaciones</h3>
        <p className="text-gray-600 dark:text-gray-400">¡Sé el primero en publicar algo!</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          currentUser={currentUser}
          onLike={onLike}
          onFavorite={onFavorite}
          onShare={onShare}
          onAddComment={onAddComment}
          onLikeComment={onLikeComment}
        />
      ))}
    </div>
  );
};

