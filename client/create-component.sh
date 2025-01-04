#!/bin/bash

# Checa se o nome do componente foi fornecido
if [ -z "$1" ]; then
    echo "Por favor, forneça o nome do componente."
    echo "Uso: ./create-component.sh NomeDoComponente"
    exit 1
fi

# Define o nome do componente e caminho
COMPONENT_NAME=$1
COMPONENT_DIR="./src/components/$COMPONENT_NAME"

# Cria a estrutura de diretórios
mkdir -p "$COMPONENT_DIR"

# Conteúdo inicial dos arquivos
STYLES_CONTENT="import styled, { css } from 'styled-components';

export const Container = styled.div\`
  \${({ theme }) => css\`
    font-size: \${theme.fonts.sizes.medium};
  \`}
\`;
"

COMPONENT_CONTENT="import P from 'prop-types';
import * as Styled from './styles';

export const $COMPONENT_NAME = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

$COMPONENT_NAME.propTypes = {
  children: P.node.isRequired,
};
"

STORYBOOK_CONTENT="import { $COMPONENT_NAME } from '.';

export default {
  title: '$COMPONENT_NAME',
  component: $COMPONENT_NAME,
  args: {
    children: '$COMPONENT_NAME',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <$COMPONENT_NAME {...args} />
  </div>
);
"

TEST_CONTENT="import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { $COMPONENT_NAME } from '.';

describe('<$COMPONENT_NAME />', () => {
  it('should render', () => {
    renderTheme(<$COMPONENT_NAME>Children</$COMPONENT_NAME>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
"

# Cria os arquivos e escreve o conteúdo inicial
echo "$STYLES_CONTENT" >"$COMPONENT_DIR/styles.js"
echo "$COMPONENT_CONTENT" >"$COMPONENT_DIR/index.jsx"
echo "$STORYBOOK_CONTENT" >"$COMPONENT_DIR/stories.jsx"
echo "$TEST_CONTENT" >"$COMPONENT_DIR/${COMPONENT_NAME}.test.jsx"

# Formata os arquivos com Prettier e ESLint
npx eslint $COMPONENT_DIR/*.jsx --fix
npx eslint $COMPONENT_DIR/*.js --fix
echo "Arquivos formatados com ESLint."

echo "Componente $COMPONENT_NAME criado com sucesso em $COMPONENT_DIR."
