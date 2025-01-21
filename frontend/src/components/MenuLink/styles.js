import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    position: relative;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};

    &::after {
      content: '';
      position: absolute;
      bottom: 0.8rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
