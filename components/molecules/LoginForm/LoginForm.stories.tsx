import type { Meta, StoryObj } from '@storybook/nextjs';
import { LoginForm } from './LoginForm';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether the form is in loading state',
    },
  },
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    loading: false,
    error: 'Credenciales inválidas. Por favor intenta nuevamente.',
  },
};

export const InCard: Story = {
  render: (args) => (
    <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Iniciar Sesión</h2>
      <LoginForm {...args} />
    </div>
  ),
  args: {
    loading: false,
  },
};

