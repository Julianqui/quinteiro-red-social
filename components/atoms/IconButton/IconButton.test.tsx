import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';

const TestIcon = () => <svg data-testid="test-icon"><path d="M0 0h24v24H0z" /></svg>;

describe('IconButton Component', () => {
  it('renders icon button with children', () => {
    render(
      <IconButton ariaLabel="Test button">
        <TestIcon />
      </IconButton>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    render(
      <IconButton ariaLabel="Test button" onClick={handleClick}>
        <TestIcon />
      </IconButton>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with aria-label', () => {
    render(
      <IconButton ariaLabel="Like button">
        <TestIcon />
      </IconButton>
    );
    expect(screen.getByLabelText('Like button')).toBeInTheDocument();
  });

  it('renders default variant', () => {
    render(
      <IconButton ariaLabel="Test" variant="default">
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-gray-600');
  });

  it('renders primary variant', () => {
    render(
      <IconButton ariaLabel="Test" variant="primary">
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-blue-600');
  });

  it('renders danger variant', () => {
    render(
      <IconButton ariaLabel="Test" variant="danger">
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-red-600');
  });

  it('renders small size', () => {
    render(
      <IconButton ariaLabel="Test" size="sm">
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-8', 'h-8');
  });

  it('renders medium size', () => {
    render(
      <IconButton ariaLabel="Test" size="md">
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-10', 'h-10');
  });

  it('renders large size', () => {
    render(
      <IconButton ariaLabel="Test" size="lg">
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-12', 'h-12');
  });

  it('disables button when disabled prop is true', () => {
    render(
      <IconButton ariaLabel="Test" disabled>
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies custom className', () => {
    render(
      <IconButton ariaLabel="Test" className="custom-icon-button">
        <TestIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-icon-button');
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <IconButton ariaLabel="Test" onClick={handleClick} disabled>
        <TestIcon />
      </IconButton>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});

