import type { Meta, StoryObj } from '@storybook/nextjs';
import { CreatePostForm } from './CreatePostForm';
import { fn } from '@storybook/test';
import { IUser } from '@/interfaces';

const mockUser: IUser = {
  id: '1',
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@example.com',
  avatar: 'https://i.pravatar.cc/150?img=1',
};

const meta = {
  title: 'Molecules/CreatePostForm',
  component: CreatePostForm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    currentUser: mockUser,
    onSubmit: fn(),
  },
} satisfies Meta<typeof CreatePostForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentUser: mockUser,
  },
};

export const InFeed: Story = {
  render: (args) => (
    <div className="max-w-2xl mx-auto">
      <CreatePostForm {...args} />
    </div>
  ),
  args: {
    currentUser: mockUser,
  },
};

