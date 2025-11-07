'use client';

import React from 'react';
import { IconButton } from '@/components/atoms';
import { t } from '@/lib/i18n';

interface IPostActionsProps {
  postId: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked: boolean;
  isFavorited: boolean;
  onLike: () => void;
  onFavorite: () => void;
  onShare: () => void;
  onComment: () => void;
  className?: string;
}

export const PostActions: React.FC<IPostActionsProps> = ({
  likesCount,
  commentsCount,
  sharesCount,
  isLiked,
  isFavorited,
  onLike,
  onFavorite,
  onShare,
  onComment,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Like */}
      <div className="flex items-center gap-1">
        <IconButton
          onClick={onLike}
          variant={isLiked ? 'danger' : 'default'}
          ariaLabel={t('post.like')}
        >
          <svg
            className="w-5 h-5"
            fill={isLiked ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </IconButton>
        <span className="text-sm text-gray-600 dark:text-gray-400">{likesCount}</span>
      </div>

      {/* Comment */}
      <div className="flex items-center gap-1">
        <IconButton onClick={onComment} ariaLabel={t('post.comment')}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </IconButton>
        <span className="text-sm text-gray-600 dark:text-gray-400">{commentsCount}</span>
      </div>

      {/* Share */}
      <div className="flex items-center gap-1">
        <IconButton onClick={onShare} ariaLabel={t('post.share')}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </IconButton>
        <span className="text-sm text-gray-600 dark:text-gray-400">{sharesCount}</span>
      </div>

      {/* Favorite */}
      <IconButton
        onClick={onFavorite}
        variant={isFavorited ? 'primary' : 'default'}
        ariaLabel={isFavorited ? t('post.favorited') : t('post.favorite')}
        className="ml-auto"
      >
        <svg
          className="w-5 h-5"
          fill={isFavorited ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </IconButton>
    </div>
  );
};

