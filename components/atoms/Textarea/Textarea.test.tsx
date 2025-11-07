import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea Component', () => {
  it('renders textarea with label', () => {
    render(<Textarea id="test" name="test" label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders textarea without label', () => {
    render(<Textarea id="test" name="test" placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    render(<Textarea id="test" name="test" onChange={handleChange} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'test value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays error message', () => {
    render(<Textarea id="test" name="test" error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies error styles when error exists', () => {
    render(<Textarea id="test" name="test" error="Error" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('border-red-500');
  });

  it('shows required indicator', () => {
    render(<Textarea id="test" name="test" label="Required Field" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('disables textarea when disabled prop is true', () => {
    render(<Textarea id="test" name="test" disabled />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
  });

  it('renders with value', () => {
    render(<Textarea id="test" name="test" value="Initial value" onChange={() => {}} />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('Initial value');
  });

  it('renders with custom rows', () => {
    render(<Textarea id="test" name="test" rows={10} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '10');
  });

  it('renders with placeholder', () => {
    render(<Textarea id="test" name="test" placeholder="Enter your message" />);
    expect(screen.getByPlaceholderText('Enter your message')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Textarea id="test" name="test" className="custom-textarea" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('custom-textarea');
  });

  it('renders with default rows when not specified', () => {
    render(<Textarea id="test" name="test" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '3');
  });
});

