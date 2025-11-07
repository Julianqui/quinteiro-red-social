'use client';

import React from 'react';
import { Avatar } from '@/components/atoms';
import { IComment } from '@/interfaces';
import { t } from '@/lib/i18n';

interface ICommentItemProps {
  comment: IComment;
  currentUserId?: string;
  onLike: (commentId: string) => void;
  className?: string;
}

export const CommentItem: React.FC<ICommentItemProps> = ({
  comment,
  currentUserId,
  onLike,
  className = '',
}) => {
  const isLiked = currentUserId ? comment.likes.includes(currentUserId) : false;
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Ahora';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return `${Math.floor(diffInMinutes / 1440)}d`;
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      <Avatar
        src={comment.author.avatar}
        alt={comment.author.name}
        size="sm"
      />
      <div className="flex-1">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2">
          <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{comment.author.name}</p>
          <p className="text-sm text-gray-800 dark:text-gray-200">{comment.content}</p>
        </div>
        <div className="flex items-center gap-3 mt-1 px-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(comment.createdAt)}</span>
          <button
            onClick={() => onLike(comment.id)}
            className={`text-xs font-semibold ${
              isLiked ? 'text-red-600 dark:text-red-500' : 'text-gray-600 dark:text-gray-400'
            } hover:underline`}
          >
            {t('post.like')} {comment.likes.length > 0 && `· ${comment.likes.length}`}
          </button>
        </div>
      </div>
    </div>
  );
};

