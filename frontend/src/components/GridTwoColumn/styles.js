import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(280px, 1.2fr) 1.3fr;
    align-items: center;
    gap: ${theme.spacings.xlarge};

    margin: 0 auto;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      gap: ${theme.spacings.small};
    }

    ${Title} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    order: 1;
    max-width: 60ch;

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.medium};
      order: 2;
      max-width: 100%;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    order: 2;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.small};

    @media ${theme.media.lteLarge} {
      max-width: 600px;
    }

    @media ${theme.media.lteMedium} {
      order: 1;
      margin-bottom: ${theme.spacings.medium};
      max-width: 500px;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: all 300ms ease-in-out;

    @media ${theme.media.lteMedium} {
      max-height: 40rem;
    }
  `}
`;
