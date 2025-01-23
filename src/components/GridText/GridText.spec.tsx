import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';

describe('<GridText />', () => {
  it('should render with default values', () => {
    renderTheme(<GridText {...mock} />);

    // Verifica o título principal
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();

    // Verifica a descrição
    expect(screen.getByText(mock.description)).toBeInTheDocument();

    // Verifica se todos os grid items foram renderizados
    mock.grid.forEach((item) => {
      expect(
        screen.getByRole('heading', { name: item.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct number of grid items', () => {
    renderTheme(<GridText {...mock} />);
    const gridItems = screen.getAllByRole('heading').slice(1); // Remove título principal
    expect(gridItems).toHaveLength(mock.grid.length);
  });

  it('should render grid items with correct text content', () => {
    renderTheme(<GridText {...mock} />);
    const gridItems = screen.getAllByRole('article');

    gridItems.forEach((item, index) => {
      const title = screen.getByRole('heading', {
        name: mock.grid[index].title,
      });
      const description = screen.getByText(mock.grid[index].description);

      expect(item).toContainElement(title);
      expect(item).toContainElement(description);
    });
  });
});
