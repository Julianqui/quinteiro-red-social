'use client';

import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { Header } from '@/components/organisms/Header';
import { FeedList } from '@/components/organisms/FeedList';
import { CreatePostForm } from '@/components/molecules';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setPosts,
  addPost,
  toggleLike,
  toggleFavorite,
  incrementShares,
  addComment,
  toggleCommentLike,
} from '@/store/slices/postsSlice';
import { setUser, logout } from '@/store/slices/authSlice';
import { IPost, IUser } from '@/interfaces';
import { Session } from 'next-auth';

interface IFeedPageClientProps {
  session: Session;
  initialPosts: IPost[];
}

export const FeedPageClient: React.FC<IFeedPageClientProps> = ({
  session,
  initialPosts,
}) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const currentUser = useAppSelector((state) => state.auth.user);

  // Inicializar datos en Redux
  useEffect(() => {
    dispatch(setPosts(initialPosts));

    // Convertir session user a nuestro formato IUser
    if (session.user && !currentUser) {
      const user: IUser = {
        id: (session.user as { id?: string }).id || '1',
        name: session.user.name || 'Usuario',
        email: session.user.email || '',
        username: session.user.email?.split('@')[0] || 'user',
        avatar: session.user.image || undefined,
        bio: 'Usuario de la red social',
      };
      dispatch(setUser(user));
    }
  }, [dispatch, initialPosts, session, currentUser]);

  const handleLogout = async () => {
    dispatch(logout());
    await signOut({ callbackUrl: '/login' });
  };

  const handleCreatePost = (content: string, mediaUrl?: string) => {
    if (!currentUser) return;

    const newPost: IPost = {
      id: `p${Date.now()}`,
      author: currentUser,
      content,
      mediaUrl,
      mediaType: mediaUrl ? 'image' : undefined,
      createdAt: new Date().toISOString(),
      likes: [],
      favorites: [],
      shares: 0,
      comments: [],
    };

    dispatch(addPost(newPost));
  };

  const handleLike = (postId: string) => {
    if (!currentUser) return;
    dispatch(toggleLike({ postId, userId: currentUser.id }));
  };

  const handleFavorite = (postId: string) => {
    if (!currentUser) return;
    dispatch(toggleFavorite({ postId, userId: currentUser.id }));
  };

  const handleShare = (postId: string) => {
    dispatch(incrementShares(postId));
    
    // Simular compartir
    if (navigator.share) {
      navigator.share({
        title: 'Compartir publicación',
        text: 'Mira esta publicación en nuestra red social',
        url: window.location.href,
      }).catch(() => {
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(window.location.href);
        alert('¡Enlace copiado al portapapeles!');
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const handleAddComment = (postId: string, content: string) => {
    if (!currentUser) return;

    const newComment = {
      id: `c${Date.now()}`,
      author: currentUser,
      content,
      postId,
      createdAt: new Date().toISOString(),
      likes: [],
    };

    dispatch(addComment({ postId, comment: newComment }));
  };

  const handleLikeComment = (postId: string, commentId: string) => {
    if (!currentUser) return;
    dispatch(toggleCommentLike({ postId, commentId, userId: currentUser.id }));
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header user={currentUser} onLogout={handleLogout} />

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Create Post Form */}
        <CreatePostForm
          currentUser={currentUser}
          onSubmit={handleCreatePost}
          className="mb-6"
        />

        {/* Feed */}
        <FeedList
          posts={posts}
          currentUser={currentUser}
          onLike={handleLike}
          onFavorite={handleFavorite}
          onShare={handleShare}
          onAddComment={handleAddComment}
          onLikeComment={handleLikeComment}
        />
      </main>
    </div>
  );
};

