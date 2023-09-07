import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@/components/tag/Tag.tsx'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'facebook',
      values: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    }
  },
  args: {
    children: 'text'
  },
  argTypes: {
    children: {
      description: 'Element that will display the tag',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
};