import { GridImage } from '.';
import mock from './mock';

export default {
  title: 'Components/GridImage',
  component: GridImage,
  args: mock,
};

export const Template = (args) => (
  <div>
    <GridImage {...args} />
  </div>
);
