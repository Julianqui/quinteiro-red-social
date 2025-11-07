import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CommentItem } from './CommentItem';
import { IComment } from '@/interfaces';

const mockComment: IComment = {
  id: '1',
  postId: 'post-1',
  author: {
    id: 'user-1',
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar.jpg',
  },
  content: 'This is a test comment',
  createdAt: new Date().toISOString(),
  likes: [],
};

describe('CommentItem Component', () => {
  const mockOnLike = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders comment content', () => {
    render(<CommentItem comment={mockComment} onLike={mockOnLike} />);
    
    expect(screen.getByText('This is a test comment')).toBeInTheDocument();
  });

  it('renders author name', () => {
    render(<CommentItem comment={mockComment} onLike={mockOnLike} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders author avatar', () => {
    render(<CommentItem comment={mockComment} onLike={mockOnLike} />);
    
    expect(screen.getByAltText('John Doe')).toBeInTheDocument();
  });

  it('handles like button click', () => {
    render(<CommentItem comment={mockComment} onLike={mockOnLike} />);
    
    const likeButton = screen.getByRole('button', { name: /me gusta/i });
    fireEvent.click(likeButton);
    
    expect(mockOnLike).toHaveBeenCalledWith('1');
  });

  it('shows like count when greater than 0', () => {
    const commentWithLikes = {
      ...mockComment,
      likes: ['user-1', 'user-2', 'user-3'],
    };
    
    render(<CommentItem comment={commentWithLikes} onLike={mockOnLike} />);
    
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });

  it('shows liked state when user has liked', () => {
    const commentWithUserLike = {
      ...mockComment,
      likes: ['current-user'],
    };
    
    render(
      <CommentItem
        comment={commentWithUserLike}
        currentUserId="current-user"
        onLike={mockOnLike}
      />
    );
    
    const likeButton = screen.getByRole('button', { name: /me gusta/i });
    expect(likeButton).toHaveClass('text-red-600');
  });

  it('applies custom className', () => {
    const { container } = render(
      <CommentItem comment={mockComment} onLike={mockOnLike} className="custom-comment" />
    );
    
    expect(container.firstChild).toHaveClass('custom-comment');
  });
});

