import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders input with label', () => {
    render(<Input id="test" name="test" label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders input without label', () => {
    render(<Input id="test" name="test" placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    render(<Input id="test" name="test" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('handles onBlur event', () => {
    const handleBlur = jest.fn();
    render(<Input id="test" name="test" onBlur={handleBlur} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.blur(input);
    
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('displays error message', () => {
    render(<Input id="test" name="test" error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies error styles when error exists', () => {
    render(<Input id="test" name="test" error="Error" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-500');
  });

  it('renders as email type', () => {
    render(<Input id="email" name="email" type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders as password type', () => {
    const { container } = render(<Input id="password" name="password" type="password" />);
    const input = container.querySelector('#password') as HTMLInputElement;
    expect(input).toHaveAttribute('type', 'password');
  });

  it('shows required indicator', () => {
    render(<Input id="test" name="test" label="Required Field" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<Input id="test" name="test" disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('renders with value', () => {
    render(<Input id="test" name="test" value="Initial value" onChange={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('Initial value');
  });

  it('renders with placeholder', () => {
    render(<Input id="test" name="test" placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Input id="test" name="test" className="custom-input" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('custom-input');
  });
});

