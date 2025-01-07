import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background-image: url(${theme.backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};

    ${background && containerBackgroundActivate(theme)};

    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
