import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GoTop>Children</GoTop>);
    expect(container).toMatchSnapshot();
  });

  it('should have a href attribute', () => {
    renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
  });
});
