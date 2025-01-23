import type { Meta, StoryObj } from '@storybook/react';
import { GoTop } from '.';

const meta: Meta<typeof GoTop> = {
  title: 'Components/GoTop',
  component: GoTop,
};

export default meta;

type Story = StoryObj<typeof GoTop>;

export const Template: Story = {
  render: () => (
    <div style={{ height: '400vh' }}>
      <GoTop />
    </div>
  ),
};
