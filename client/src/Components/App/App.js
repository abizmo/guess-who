import React from 'react';
import styled from 'styled-components';

import Board from './Board';
import Score from './Score';

const Container = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  margin: 0 auto;
  width: 740px;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
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
