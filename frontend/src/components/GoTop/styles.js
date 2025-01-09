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
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      background: ${theme.colors.secondaryColor};
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      background: ${theme.colors.primaryColor};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      transition: transform 0.2s ease-in-out;
    }

    &:hover > svg {
      transform: translateY(-3px);
    }

    &:active > svg {
      transform: translateY(0);
    }
  `}
`;
