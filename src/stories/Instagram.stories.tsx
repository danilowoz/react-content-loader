import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Instagram, InstagramProps } from '../presets/Instagram'

const meta: Meta<typeof Instagram> = {
  title: 'Presets/Instagram',
  component: Instagram,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Instagram>

export const Default: Story = {
  args: {},
}

export const Customized: Story = {
  args: {
    backgroundColor: '#d9d9d9',
    foregroundColor: '#bfbfbf',
    speed: 2,
    rtl: true,
    uniqueKey: 'instagram-preset-custom',
  },
}
