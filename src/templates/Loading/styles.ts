import styled, { css, keyframes } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const rotateNormal = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const rotateReverse = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

const sharedCircleStyles = css`
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-width: 0.5rem;
  border-color: transparent;
  border-style: solid;
  border-radius: 50%;
`;

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: ${theme.colors.primaryColor};

    &:before,
    &:after {
      ${sharedCircleStyles}
    }

    &:after {
      width: 6rem;
      height: 6rem;
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      border-top: 0.5rem solid ${theme.colors.secondaryColor};
      animation: ${rotateNormal} 600ms linear infinite;
    }

    &:before {
      width: 2rem;
      height: 2rem;
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      border-top: 0.5rem solid ${theme.colors.secondaryColor};
      animation: ${rotateReverse} 1s linear infinite;
    }
  `}
`;
