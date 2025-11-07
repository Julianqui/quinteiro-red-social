import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
  it('renders avatar with image', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const img = screen.getByAltText('User Avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
  });

  it('renders fallback when no image src', () => {
    render(<Avatar src="" alt="User" />);
    expect(screen.getByText('U')).toBeInTheDocument();
  });

  it('renders small size', () => {
    const { container } = render(<Avatar src="test.jpg" alt="Test" size="sm" />);
    const avatar = container.firstChild;
    expect(avatar).toHaveClass('w-8', 'h-8');
  });

  it('renders medium size', () => {
    const { container } = render(<Avatar src="test.jpg" alt="Test" size="md" />);
    const avatar = container.firstChild;
    expect(avatar).toHaveClass('w-10', 'h-10');
  });

  it('renders large size', () => {
    const { container } = render(<Avatar src="test.jpg" alt="Test" size="lg" />);
    const avatar = container.firstChild;
    expect(avatar).toHaveClass('w-12', 'h-12');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Avatar src="test.jpg" alt="Test" className="custom-avatar" />
    );
    const avatar = container.firstChild;
    expect(avatar).toHaveClass('custom-avatar');
  });

  it('extracts initials from alt text for fallback', () => {
    render(<Avatar src="" alt="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('handles empty alt text', () => {
    render(<Avatar src="" alt="" />);
    const { container } = render(<Avatar src="" alt="" />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders with correct border radius', () => {
    const { container } = render(<Avatar src="test.jpg" alt="Test" />);
    const avatar = container.firstChild;
    expect(avatar).toHaveClass('rounded-full');
  });
});

