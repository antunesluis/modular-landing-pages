import type { Meta, StoryObj } from '@storybook/react';
import { GridContent } from '.';
import mock from './mock';

const meta: Meta<typeof GridContent> = {
  title: 'Components/GridContent',
  component: GridContent,
  args: mock,
};

export default meta;

type Story = StoryObj<typeof GridContent>;

export const Template: Story = {};
