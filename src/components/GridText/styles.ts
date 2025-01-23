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

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    border-radius: 10px;

    padding: ${theme.spacings.medium};
    background: rgba(255, 255, 255, 0.03);
    border-radius: 15px;

    &:hover {
      transform: translateY(-6px);
      background: rgba(255, 255, 255, 0.05);
    }

    ${TextComponent} {
      opacity: 0.85;
      line-height: 1.6;
    }
  `}
`;

export const HeaderContainer = styled.div`
  ${() => css`
    ${({ theme }) => css`
      display: flex;
      align-items: center;
      margin-bottom: ${theme.spacings.medium};
      position: relative;

      ${HeadingContainer} {
        margin: 0;
        padding-left: ${theme.spacings.medium};
      }
    `}
  `}
`;

export const CardNumber = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    font-weight: 700;
    // font-weight: bold;
    // font-size: clamp(5rem, 8vw, 7.5rem);

    opacity: 0.15;
    transition: all 0.3s ease-in-out;

    ${GridElement}:hover & {
      opacity: 0.2;
      transform: scale(1.1) rotate(5deg);
    }
  `}
`;
