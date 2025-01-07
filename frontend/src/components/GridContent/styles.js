import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const HtmlContent = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;

    // Estilização para textos e parágrafos
    p {
      font-size: ${theme.fonts.sizes.medium};
      line-height: 1.5;
      margin: ${theme.spacings.medium} 0;
    }

    // Estilização para cabeçalhos dentro do conteúdo
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
      font-family: ${theme.fonts.family.secondary};
    }

    h1 {
      font-size: ${theme.fonts.sizes.xlarge};
      margin: ${theme.spacings.xlarge} 0;
    }

    h2 {
      font-size: ${theme.fonts.sizes.large};
      margin: ${theme.spacings.large} 0 ${theme.spacings.medium};
    }

    h3 {
      font-size: ${theme.fonts.sizes.medium};
      margin: ${theme.spacings.xlarge} 0 ${theme.spacings.small};
    }

    // Estilização para links
    a {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }

    // Estilização para listas
    ul,
    ol {
      margin: ${theme.spacings.small} 0;
      padding: ${theme.spacings.medium} ${theme.spacings.large};
    }

    ul {
      list-style: disc;
    }

    ol {
      list-style: decimal;
    }

    li {
      margin: ${theme.spacings.small} 0;
      font-size: ${theme.fonts.sizes.medium};
      text-align: left;
    }

    // Estilização para imagens
    img {
      max-width: 100%;
      height: auto;
    }

    // Estilização para citações
    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
      margin: ${theme.spacings.medium} 0;
      padding: ${theme.spacings.medium} ${theme.spacings.large};
      font-style: italic;
    }

    // Estilização para tabelas
    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${theme.spacings.medium} 0;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 1px solid ${theme.colors.mediumGray};
      text-align: left;
    }

    table th {
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
    }

    // Estilização para elementos de ênfase
    strong,
    b {
      font-weight: bold;
    }

    em,
    i {
      font-style: italic;
    }

    /*
    @media ${theme.media.lteMedium} {
      h1 {
        font-size: ${theme.fonts.sizes.large};
      }
      h2 {
        font-size: ${theme.fonts.sizes.medium};
      }
      h3 {
        font-size: ${theme.fonts.sizes.small};
      }
      padding: ${theme.spacings.medium};
    } */
  `}
`;
