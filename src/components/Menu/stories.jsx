import { Menu } from '.';

import linksMock from '../NavLinks/mock';

export default {
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

export const Template = (args) => {
  return (
    <div style={{ height: '300vh' }}>
      <Menu {...args} />
    </div>
  );
};
