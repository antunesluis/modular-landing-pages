import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xlarge} 0 ${theme.spacings.xlarge};
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
    width: 100%;
  `}
`;

export const HtmlContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow-x: hidden; // Prevent horizontal scroll at component level

    p {
      font-size: ${theme.fonts.sizes.medium};
      line-height: 1.5;
      margin: ${theme.spacings.medium} 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: ${theme.spacings.xlarge} 0 ${theme.spacings.xlarge};
      font-weight: 700;
      font-family: ${theme.fonts.family.secondary};
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
      display: block;
      overflow-x: auto; // Adiciona scroll horizontal apenas na tabela
      -webkit-overflow-scrolling: touch; // Melhora a rolagem em dispositivos touch

      // Remove display: block em telas maiores
      @media (min-width: 768px) {
        display: table;
      }
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 1px solid ${theme.colors.mediumGray};
      text-align: left;
      min-width: 15rem; // Garante uma largura mínima para células
    }

    table th {
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
    }
  `}
`;
