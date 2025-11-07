'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Avatar, Textarea, Button } from '@/components/atoms';
import { PostActions } from '../PostActions';
import { CommentList } from '../CommentList';
import { IPost, IUser } from '@/interfaces';
import { t } from '@/lib/i18n';

interface IPostCardProps {
  post: IPost;
  currentUser?: IUser;
  onLike: (postId: string) => void;
  onFavorite: (postId: string) => void;
  onShare: (postId: string) => void;
  onAddComment: (postId: string, content: string) => void;
  onLikeComment: (postId: string, commentId: string) => void;
  className?: string;
}

export const PostCard: React.FC<IPostCardProps> = ({
  post,
  currentUser,
  onLike,
  onFavorite,
  onShare,
  onAddComment,
  onLikeComment,
  className = '',
}) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  
  const isLiked = currentUser ? post.likes.includes(currentUser.id) : false;
  const isFavorited = currentUser ? post.favorites.includes(currentUser.id) : false;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Hace menos de 1 hora';
    if (diffInHours < 24) return `Hace ${diffInHours} horas`;
    if (diffInHours < 48) return 'Hace 1 día';
    return `Hace ${Math.floor(diffInHours / 24)} días`;
  };

  const handleAddComment = () => {
    if (newComment.trim() && currentUser) {
      onAddComment(post.id, newComment);
      setNewComment('');
    }
  };

  return (
    <article className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden ${className}`}>
      <div className="p-4 flex items-center gap-3">
        <Avatar
          src={post.author.avatar}
          alt={post.author.name}
          size="md"
          className="hidden sm:block"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">{post.author.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">@{post.author.username} · {formatDate(post.createdAt)}</p>
        </div>
      </div>

      <div className="px-4 pb-3">
        <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{post.content}</p>
      </div>

      {post.mediaUrl && post.mediaType === 'image' && (
        <div className="relative w-full h-96 bg-gray-100">
          <Image
            src={post.mediaUrl}
            alt="Post media"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      )}

      <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
        <PostActions
          postId={post.id}
          likesCount={post.likes.length}
          commentsCount={post.comments.length}
          sharesCount={post.shares}
          isLiked={isLiked}
          isFavorited={isFavorited}
          onLike={() => onLike(post.id)}
          onFavorite={() => onFavorite(post.id)}
          onShare={() => onShare(post.id)}
          onComment={() => setShowComments(!showComments)}
        />
      </div>

      {showComments && (
        <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
          {currentUser && (
              <div className="flex gap-2 mb-4">
                <Avatar
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  size="sm"
                  className="hidden sm:block"
                />
                <div className="flex-1 flex flex-col sm:flex-row gap-2">
                  <Textarea
                    id={`comment-${post.id}`}
                    name="comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={t('comments.writeComment')}
                    rows={2}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleAddComment}
                    variant="primary"
                    size="sm"
                    disabled={!newComment.trim()}
                    className="self-end sm:self-end w-full sm:w-auto"
                  >
                    {t('buttons.send')}
                  </Button>
                </div>
              </div>
          )}

          <CommentList
            comments={post.comments}
            currentUserId={currentUser?.id}
            onLikeComment={(commentId) => onLikeComment(post.id, commentId)}
          />
        </div>
      )}
    </article>
  );
};

