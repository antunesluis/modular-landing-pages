import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.spacings.maxWidth};
    margin: 0 auto;

    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
      max-width: 70ch;
      opacity: 0.9;
    }

    > ${HeadingContainer} {
      text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
      margin-bottom: ${theme.spacings.medium};
    }

    @media ${theme.media.lteMedium} {
      ${TextComponent} {
        margin-bottom: ${theme.spacings.large};
      }
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 32rem), 1fr));
    gap: ${theme.spacings.xlarge};
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.03);
    transition: all 0.3s ease-in-out;
    padding: ${theme.spacings.medium};

    &:hover {
      transform: translateY(-6px);
      background: rgba(255, 255, 255, 0.05);
    }

    ${HeadingContainer} {
      position: relative;
      left: 5rem;
      margin-bottom: ${theme.spacings.small};

      // Evita que o texto encoste na lateral direita
      padding-right: ${theme.spacings.medium};
      // Garante que o heading não ultrapasse o container
      max-width: calc(100% - 5rem);

      @media ${theme.media.lteMedium} {
        left: 4rem;
        max-width: calc(100% - 4rem);
      }
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: clamp(5rem, 8vw, 7.5rem);
      font-weight: 700;
      opacity: 0.15;
      top: -3rem;
      left: -6rem;
      transform: rotate(8deg);
      transition: all 0.2s ease-in-out;
    }

    &:hover ${HeadingContainer}::before {
      opacity: 0.2;
      transform: rotate(5deg) scale(1.1);
    }

    ${TextComponent} {
      line-height: 1.6;
      opacity: 0.85;
      padding-right: ${theme.spacings.small};
      max-width: 100%;
    }
  `}
`;
