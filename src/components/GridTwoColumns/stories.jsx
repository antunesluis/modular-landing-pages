import { GridTwoColumns } from '.';
import mock from './mock';

export default {
  title: 'Components/GridTwoColumns',
  component: GridTwoColumns,
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
      <GridTwoColumns {...args} /> {/* Usar o nome correto */}
    </div>
  );
};
