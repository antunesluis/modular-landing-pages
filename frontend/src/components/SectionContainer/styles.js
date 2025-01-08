import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.spacings.maxWidth};
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
