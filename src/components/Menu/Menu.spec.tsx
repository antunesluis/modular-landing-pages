import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

import linksMock from '../NavLinks/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextElementSibling;

    expect(button).toHaveStyle({ display: 'none' });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    if (menuContainer) {
      fireEvent.click(menuContainer);
    }
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    const navigation = screen.queryByRole('navigation', { name: 'Main menu' });

    expect(navigation?.firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
