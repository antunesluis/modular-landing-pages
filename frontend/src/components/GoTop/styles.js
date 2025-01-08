import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;

    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border-radius: 0.4rem;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:focus {
      background: ${theme.colors.secondaryColor};
      color: ${theme.colors.white};
      transform: scale(1.05);
    }
  `}
`;
