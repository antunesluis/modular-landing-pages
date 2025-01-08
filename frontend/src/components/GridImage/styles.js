import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.spacings.maxWidth};
    margin: 0 auto;
    position: relative;

    > ${TextComponent} {
      opacity: 0.9;
      max-width: 100%;
    }

    @media ${theme.media.lteMedium} {
      padding: ${theme.spacings.large} ${theme.spacings.small};

      > ${TextComponent} {
        margin: ${theme.spacings.medium} 0 ${theme.spacings.xhuge};
      }
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: ${theme.spacings.large};
    margin: ${theme.spacings.large} auto;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      gap: ${theme.spacings.medium};
      margin: ${theme.spacings.medium} auto;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    aspect-ratio: 1; // Mantém proporção quadrada
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    border-radius: ${theme.spacings.small};
    background: ${theme.colors.mediumGray};

    &::before {
      content: '';
      z-index: 1;
      opacity: 0;
      position: absolute;
      inset: 0; // Substitui top: 0, left: 0, width: 100%, height: 100%

      background: rgba(0, 0, 0, 0.3);
      transition: opacity 300ms ease-in-out;
    }

    &:hover {
      &::before {
        opacity: 1;
      }

      img {
        transform: scale(1.1) rotate(3deg);
      }
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    display: block; // Remove espaço extra abaixo da imagem
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    transition: transform 500ms ease-in-out;
    will-change: transform;
  `}
`;

export const ImageCaption = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    opacity: 0;
    bottom: 0;
    right: 0; // Garante que ocupe toda a largura
    left: 0;
    width: 100%;
    z-index: 2;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: ${theme.spacings.small}; // Adicionado padding
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.small};

    transform: translateY(100%);
    transition: all 300ms ease-in-out;

    ${GridElement}:hover & {
      opacity: 1;
      transform: translateY(0);
    }
  `}
`;
