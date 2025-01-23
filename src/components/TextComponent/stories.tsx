import type { Meta, StoryObj } from '@storybook/react';
import { TextComponent } from '.';

const meta: Meta<typeof TextComponent> = {
  title: 'Components/TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam placeat unde harum. Facilis, quasi delectus
    obcaecati perferendis nobis alias ad aspernatur quod neque,
    corporis, aperiam numquam. Sint consequatur omnis voluptate.`,
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof TextComponent>;

export const Template: Story = {};
