import type { Meta, StoryObj } from '@storybook/react';
import { SectionBackground } from '.';

const meta: Meta<typeof SectionBackground> = {
  title: 'Components/SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          doloribus debitis minima nam beatae alias eius, mollitia asperiores
          animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
          quaerat aspernatur expedita!
        </p>
      </div>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof SectionBackground>;

export const Template: Story = {
  render: (args) => (
    <div>
      <SectionBackground {...args} />
    </div>
  ),
};
