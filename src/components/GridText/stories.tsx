import type { Meta, StoryObj } from '@storybook/react';
import { GridText } from '.';
import mock from './mock';

const meta: Meta<typeof GridText> = {
  title: 'Components/GridText',
  component: GridText,
  args: mock,
};

export default meta;

type Story = StoryObj<typeof GridText>;

export const Template: Story = {};
