import type { Meta, StoryObj } from '@storybook/nextjs';
import { Avatar } from './Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the avatar',
    },
    src: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'User Avatar',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User Avatar',
    size: 'lg',
  },
};

export const WithoutImage: Story = {
  args: {
    src: '',
    alt: 'User',
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="Small" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=2" alt="Medium" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=3" alt="Large" size="lg" />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Avatar src="https://i.pravatar.cc/150?img=10" alt="User 1" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 2" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=12" alt="User 3" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=13" alt="User 4" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=14" alt="User 5" size="md" />
    </div>
  ),
};

