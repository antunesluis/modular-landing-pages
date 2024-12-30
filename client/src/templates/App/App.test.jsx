import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import Home from '.';
import { theme } from '../../styles/theme';

test('renders heading with text Hello', () => {
  const { debug } = renderTheme(<Home />);
  const heading = screen.getByRole('heading', { name: 'Hello' });

  expect(heading).toBeInTheDocument(); // Valida que o heading está no DOM
  expect(heading).toHaveStyle({ background: theme.colors.primary });
  expect(heading).toMatchSnapshot(); // Cria um snapshot do heading

  debug(); // Inspeciona o DOM renderizado
});
