import type { Meta, StoryObj } from '@storybook/react';
import { GridImage } from '.';
import mock from './mock';

const meta: Meta<typeof GridImage> = {
  title: 'Components/GridImage',
  component: GridImage,
  args: mock,
};

export default meta;

type Story = StoryObj<typeof GridImage>;

export const Template: Story = {};
