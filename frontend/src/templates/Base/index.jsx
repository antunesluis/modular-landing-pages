import P from 'prop-types';
import * as Styled from './styles';

export const Base = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
};
