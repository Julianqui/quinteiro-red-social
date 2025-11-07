import type { Meta, StoryObj } from '@storybook/nextjs';
import { Textarea } from './Textarea';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    name: 'default',
    label: 'Message',
    placeholder: 'Write your message...',
    rows: 4,
  },
};

export const WithValue: Story = {
  args: {
    id: 'with-value',
    name: 'with-value',
    label: 'Post Content',
    value: 'This is a sample post content that spans multiple lines.\n\nIt can have paragraphs and everything!',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    id: 'error',
    name: 'error',
    label: 'Comment',
    value: 'Too short',
    error: 'Comment must be at least 20 characters',
    rows: 3,
  },
};

export const Required: Story = {
  args: {
    id: 'required',
    name: 'required',
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 3,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    name: 'disabled',
    label: 'Disabled Textarea',
    value: 'This content cannot be edited',
    disabled: true,
    rows: 3,
  },
};

export const LargeTextarea: Story = {
  args: {
    id: 'large',
    name: 'large',
    label: 'Long Content',
    placeholder: 'Write a long text...',
    rows: 10,
  },
};

export const PostForm: Story = {
  render: () => (
    <div className="max-w-2xl space-y-4">
      <Textarea
        id="post"
        name="post"
        label="¿Qué estás pensando?"
        placeholder="Comparte tus ideas..."
        rows={4}
      />
    </div>
  ),
};

