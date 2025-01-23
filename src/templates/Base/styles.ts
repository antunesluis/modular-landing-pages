import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
