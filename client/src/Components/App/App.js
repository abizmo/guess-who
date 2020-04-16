import React from 'react';
import styled from 'styled-components';

import Board from './Board';
import Score from './Score';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const App = () => {
  return (
    <Container>
      <Score />
      <Board />
    </Container>
  )
};

export default App;
