import type { Meta, StoryObj } from '@storybook/react';
import { NavLinks } from '.';
import links from './mock';

const meta: Meta<typeof NavLinks> = {
  title: 'Components/NavLinks',
  component: NavLinks,
  args: {
    links,
  },
};

export default meta;

type Story = StoryObj<typeof NavLinks>;

export const Template: Story = {};
