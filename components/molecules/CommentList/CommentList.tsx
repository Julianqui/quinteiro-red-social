'use client';

import React from 'react';
import { CommentItem } from '../CommentItem';
import { IComment } from '@/interfaces';
import { t } from '@/lib/i18n';

interface ICommentListProps {
  comments: IComment[];
  currentUserId?: string;
  onLikeComment: (commentId: string) => void;
  className?: string;
}

export const CommentList: React.FC<ICommentListProps> = ({
  comments,
  currentUserId,
  onLikeComment,
  className = '',
}) => {
  if (comments.length === 0) {
    return (
      <div className={`text-center py-4 text-gray-500 dark:text-gray-400 text-sm ${className}`}>
        {t('comments.noComments')}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          currentUserId={currentUserId}
          onLike={onLikeComment}
        />
      ))}
    </div>
  );
};

