import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '.';
import linksMock from '../NavLinks/mock';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: 'assets/images/logos/logo-empresa.svg',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Template: Story = {
  render: (args) => (
    <div style={{ height: '300vh' }}>
      <Menu {...args} />
    </div>
  ),
};
