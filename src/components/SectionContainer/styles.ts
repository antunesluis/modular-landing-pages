import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    max-width: ${theme.spacings.maxWidth};
    margin: 0 auto;
    width: 100%;
    padding: ${theme.spacings.large};
  `}
`;
