import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content with background', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={true} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render the title', () => {
    renderTheme(<GridContent {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
  });

  it('should render content', () => {
    renderTheme(<GridContent {...mock} />);
    expect(screen.getByText(/transforme seu negócio/i)).toBeInTheDocument();
  });

  it('should match snapshot without background', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={false} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with background', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={true} />,
    );
    expect(container).toMatchSnapshot();
  });
});
