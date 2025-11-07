import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Type of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    name: 'default',
    label: 'Default Input',
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    id: 'with-value',
    name: 'with-value',
    label: 'Input with Value',
    value: 'Some text here',
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'you@example.com',
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: '••••••••',
  },
};

export const WithError: Story = {
  args: {
    id: 'error',
    name: 'error',
    label: 'Input with Error',
    value: 'invalid@',
    error: 'Please enter a valid email address',
    placeholder: 'you@example.com',
  },
};

export const Required: Story = {
  args: {
    id: 'required',
    name: 'required',
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    name: 'disabled',
    label: 'Disabled Input',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input
        id="name"
        name="name"
        label="Full Name"
        placeholder="John Doe"
        required
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="john@example.com"
        required
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        required
      />
    </div>
  ),
};

