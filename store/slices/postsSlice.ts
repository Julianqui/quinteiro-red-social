import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostsState, IPost, IComment } from '@/interfaces';
import { mockPosts } from '@/data/mockData';

const initialState: IPostsState = {
  posts: mockPosts,
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts.unshift(action.payload);
    },
    toggleLike: (state, action: PayloadAction<{ postId: string; userId: string }>) => {
      const post = state.posts.find(p => p.id === action.payload.postId);
      if (post) {
        const likeIndex = post.likes.indexOf(action.payload.userId);
        if (likeIndex > -1) {
          post.likes.splice(likeIndex, 1);
        } else {
          post.likes.push(action.payload.userId);
        }
      }
    },
    toggleFavorite: (state, action: PayloadAction<{ postId: string; userId: string }>) => {
      const post = state.posts.find(p => p.id === action.payload.postId);
      if (post) {
        const favIndex = post.favorites.indexOf(action.payload.userId);
        if (favIndex > -1) {
          post.favorites.splice(favIndex, 1);
        } else {
          post.favorites.push(action.payload.userId);
        }
      }
    },
    incrementShares: (state, action: PayloadAction<string>) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) {
        post.shares += 1;
      }
    },
    addComment: (state, action: PayloadAction<{ postId: string; comment: IComment }>) => {
      const post = state.posts.find(p => p.id === action.payload.postId);
      if (post) {
        post.comments.push(action.payload.comment);
      }
    },
    toggleCommentLike: (state, action: PayloadAction<{ postId: string; commentId: string; userId: string }>) => {
      const post = state.posts.find(p => p.id === action.payload.postId);
      if (post) {
        const comment = post.comments.find(c => c.id === action.payload.commentId);
        if (comment) {
          const likeIndex = comment.likes.indexOf(action.payload.userId);
          if (likeIndex > -1) {
            comment.likes.splice(likeIndex, 1);
          } else {
            comment.likes.push(action.payload.userId);
          }
        }
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setPosts,
  addPost,
  toggleLike,
  toggleFavorite,
  incrementShares,
  addComment,
  toggleCommentLike,
  setLoading,
  setError,
} = postsSlice.actions;

export default postsSlice.reducer;

