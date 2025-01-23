import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

interface TitleProps {
  $colorDark?: boolean;
  size?: 'small' | 'medium' | 'big' | 'huge';
  $uppercase?: boolean;
}

export const Title = styled.h1<TitleProps>`
  ${({ theme, $colorDark, size = 'huge', $uppercase = false }) => css`
    color: ${$colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase($uppercase)};
  `}
`;
