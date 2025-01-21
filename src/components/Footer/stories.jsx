import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.page/antunesluis">Feito com ❤ por Luis Antunes</a></p>`,
  },
  argTypes: {
    footerHtml: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <Footer {...args} />
  </div>
);
