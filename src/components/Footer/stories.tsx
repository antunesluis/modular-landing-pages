import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.page/antunesluis">Feito com ❤ por Luis Antunes</a></p>`,
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Template: Story = {
  args: {
    ...meta.args,
  },
};
