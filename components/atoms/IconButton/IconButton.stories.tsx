import type { Meta, StoryObj } from '@storybook/nextjs';
import { IconButton } from './IconButton';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger'],
      description: 'Visual variant of the icon button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the icon button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CommentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

export const Default: Story = {
  args: {
    children: <HeartIcon />,
    ariaLabel: 'Like',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: <HeartIcon />,
    ariaLabel: 'Like',
    variant: 'primary',
  },
};

export const Danger: Story = {
  args: {
    children: <HeartIcon />,
    ariaLabel: 'Unlike',
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    children: <HeartIcon />,
    ariaLabel: 'Like',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: <HeartIcon />,
    ariaLabel: 'Like',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: <HeartIcon />,
    ariaLabel: 'Like',
    size: 'lg',
  },
};

export const PostActions: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton ariaLabel="Like" variant="danger">
        <HeartIcon />
      </IconButton>
      <IconButton ariaLabel="Comment">
        <CommentIcon />
      </IconButton>
      <IconButton ariaLabel="Share">
        <ShareIcon />
      </IconButton>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton ariaLabel="Default" variant="default">
        <HeartIcon />
      </IconButton>
      <IconButton ariaLabel="Primary" variant="primary">
        <HeartIcon />
      </IconButton>
      <IconButton ariaLabel="Danger" variant="danger">
        <HeartIcon />
      </IconButton>
    </div>
  ),
};

