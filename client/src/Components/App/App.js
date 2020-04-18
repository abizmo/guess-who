import React from 'react';
import styled from 'styled-components';

import Board from './Board';
import Character from './Character';
import Score from './Score';

const Container = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  margin: 0 auto;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  height: 90%;
`;

const Div = styled.div`
  width: 120px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const App = () => {
  return (
    <Container>
      <Div>
        <Character />
        <Score />
      </Div>
      <Board />
    </Container>
  )
};

export default App;
