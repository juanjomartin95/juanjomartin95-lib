import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/components/button/Button.tsx'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'primary',
  },
  argTypes: {
    children: {
      description: 'Button text',
      defaultValue: '',
      type: 'string',
    },
    onClick: { description: 'Optional click handler' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    children: 'Button',
  },
}
