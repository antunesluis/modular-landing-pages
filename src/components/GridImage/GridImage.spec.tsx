import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render image with large as source', () => {
    const customMock = {
      ...mock,
      grid: [
        {
          altText: 'Test',
          large: 'large.jpg',
          medium: 'medium.jpg',
          small: 'small.jpg',
          thumbnail: 'thumb.jpg',
        },
      ],
    };
    renderTheme(<GridImage {...customMock} />);
    expect(screen.getByRole('img', { name: 'Test' })).toHaveAttribute(
      'src',
      'large.jpg',
    );
  });

  it('should render image with medium as source when large does not exist', () => {
    const customMock = {
      ...mock,
      grid: [
        {
          altText: 'Test',
          medium: 'medium.jpg',
          small: 'small.jpg',
          thumbnail: 'thumb.jpg',
        },
      ],
    };
    renderTheme(<GridImage {...customMock} />);
    expect(screen.getByRole('img', { name: 'Test' })).toHaveAttribute(
      'src',
      'medium.jpg',
    );
  });

  it('should render image with small as source when large and medium do not exist', () => {
    const customMock = {
      ...mock,
      grid: [
        {
          altText: 'Test',
          small: 'small.jpg',
          thumbnail: 'thumb.jpg',
        },
      ],
    };
    renderTheme(<GridImage {...customMock} />);
    expect(screen.getByRole('img', { name: 'Test' })).toHaveAttribute(
      'src',
      'small.jpg',
    );
  });

  it('should render image with thumbnail as source when other options do not exist', () => {
    const customMock = {
      ...mock,
      grid: [
        {
          altText: 'Test',
          thumbnail: 'thumb.jpg',
        },
      ],
    };
    renderTheme(<GridImage {...customMock} />);
    expect(screen.getByRole('img', { name: 'Test' })).toHaveAttribute(
      'src',
      'thumb.jpg',
    );
  });

  it('should render altText correctly in image and caption', () => {
    const customMock = {
      ...mock,
      grid: [
        {
          altText: 'Test alternative text',
          thumbnail: 'thumb.jpg',
        },
      ],
    };
    renderTheme(<GridImage {...customMock} />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      'Test alternative text',
    );
    expect(screen.getByText('Test alternative text')).toBeInTheDocument();
  });

  it('should render image with srcImg as source when other options do not exist', () => {
    const customMock = {
      ...mock,
      grid: [
        {
          altText: 'Test Source Image',
          srcImg: 'source.jpg',
        },
      ],
    };
    renderTheme(<GridImage {...customMock} />);
    expect(
      screen.getByRole('img', { name: 'Test Source Image' }),
    ).toHaveAttribute('src', 'source.jpg');
  });
});
