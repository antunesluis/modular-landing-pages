import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
