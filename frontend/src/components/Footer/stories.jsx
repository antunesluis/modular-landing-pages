import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://beacons.page/antunesluis">Feito com ❤ por Luis Antunes</a></p>`,
  },
  argTypes: {
    html: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <Footer {...args} />
  </div>
);
