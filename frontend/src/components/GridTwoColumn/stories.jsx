import { GridTwoColum } from '.';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: {
    title: 'Grid two columns',
    text: 'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox. ',
    srcImg: 'assets/images/illustration/programador.svg',
  },
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImg: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColum {...args} />
    </div>
  );
};
