import type { Meta, StoryObj } from '@storybook/react';
import { GridTwoColumns } from '.';
import mock from './mock';

const meta: Meta<typeof GridTwoColumns> = {
  title: 'Components/GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
  },
};

export default meta;

type Story = StoryObj<typeof GridTwoColumns>;

export const Template: Story = {
  render: (args) => (
    <div>
      <GridTwoColumns {...args} />
    </div>
  ),
};
