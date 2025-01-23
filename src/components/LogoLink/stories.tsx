import type { Meta, StoryObj } from '@storybook/react';
import { LogoLink } from '.';

const meta: Meta<typeof LogoLink> = {
  title: 'Components/LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logos/logo-passaro.svg',
    link: 'http://localhost',
  },
};

export default meta;

type Story = StoryObj<typeof LogoLink>;

export const ImageOnly: Story = {};

export const TextOnly: Story = {
  args: {
    srcImg: '',
  },
};
