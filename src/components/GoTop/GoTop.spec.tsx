import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';
import { expect, describe, it, vi } from 'vitest';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });

  it('should call custom handleClick when provided', () => {
    const spy = vi.fn();
    renderTheme(<GoTop handleClick={spy} />);
    const goTop = screen.getByRole('link', { name: 'Go to top' });
    fireEvent.click(goTop);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call window.scrollTo with smooth behavior when no custom handleClick is provided', () => {
    // Mock window.scrollTo
    const scrollToMock = vi.fn();
    Object.defineProperty(window, 'scrollTo', {
      value: scrollToMock,
      writable: true,
    });

    renderTheme(<GoTop />);
    const goTop = screen.getByRole('link', { name: 'Go to top' });

    // Trigger the click
    fireEvent.click(goTop);

    // Assert that scrollTo was called with correct parameters
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
