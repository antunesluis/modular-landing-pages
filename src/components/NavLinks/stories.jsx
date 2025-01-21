import { NavLinks } from '.';
import links from './mock';

export default {
  title: 'Components/NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => (
  <div>
    <NavLinks {...args} />
  </div>
);
