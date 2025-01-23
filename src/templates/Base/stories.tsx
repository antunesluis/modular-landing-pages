import type { Meta, StoryObj } from '@storybook/react';
import { Base } from '.';
import mockBase from './mock';

const meta: Meta<typeof Base> = {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export default meta;

type Story = StoryObj<typeof Base>;

export const Template: Story = {
  render: (args) => (
    <div>
      <Base {...args} />
    </div>
  ),
};
