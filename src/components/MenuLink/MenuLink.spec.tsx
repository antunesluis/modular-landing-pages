import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe('<MenuLink />', () => {
  it('should render a Next.js Link for internal links', () => {
    renderTheme(<MenuLink link="/internal-link">Internal</MenuLink>);
    const link = screen.getByRole('link', { name: 'Internal' });
    expect(link).toHaveAttribute('href', '/internal-link');
  });

  it('should render a normal anchor tag for external links', () => {
    renderTheme(<MenuLink link="http://external-link.com">External</MenuLink>);
    const link = screen.getByRole('link', { name: 'External' });
    expect(link).toHaveAttribute('href', 'http://external-link.com');
    expect(link.tagName).toBe('A');
  });

  it('should render with a target _self by default', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    const link = screen.getByRole('link', { name: 'Children' });
    expect(link).toHaveAttribute('target', '_self');
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
