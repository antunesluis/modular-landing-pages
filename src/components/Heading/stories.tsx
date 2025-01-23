import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Light: Story = {
  args: {
    children: 'O texto está escuro',
    colorDark: true,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Dark: Story = {
  args: {
    children: 'O texto está claro',
    colorDark: false,
  },
};
