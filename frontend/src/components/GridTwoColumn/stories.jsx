import { GridTwoColum } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColum',
  component: GridTwoColum,
  args: mock,
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
