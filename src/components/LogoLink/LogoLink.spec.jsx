import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

vi.mock('next/image', () => {
  return {
    __esModule: true,
    default: ({ src, alt }) => <img src={src} alt={alt} />,
  };
});

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Teste" />);

    expect(screen.getByRole('heading', { name: 'Teste' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Teste' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );

    expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render internal link', () => {
    renderTheme(<LogoLink link="/internal" text="Internal Link" />);

    expect(
      screen.getByRole('link', { name: 'Internal Link' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
