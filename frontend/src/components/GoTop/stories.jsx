import { GoTop } from '.';

export default {
  title: 'Components/GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div style={{ height: '400vh' }}>
    <GoTop {...args} />
  </div>
);
