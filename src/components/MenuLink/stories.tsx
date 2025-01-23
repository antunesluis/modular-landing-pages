import type { Meta, StoryObj } from '@storybook/react';
import { MenuLink } from '.';

const meta: Meta<typeof MenuLink> = {
  title: 'Components/MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export default meta;

type Story = StoryObj<typeof MenuLink>;

export const Template: Story = {};
