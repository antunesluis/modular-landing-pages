import type { Meta, StoryObj } from '@storybook/react';
import { SectionContainer } from '.';

const meta: Meta<typeof SectionContainer> = {
  title: 'Components/SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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

type Story = StoryObj<typeof SectionContainer>;

export const Template: Story = {
  render: (args) => (
    <div>
      <SectionContainer {...args} />
    </div>
  ),
};
