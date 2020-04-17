import React, { useState } from 'react';
import styled from 'styled-components';

import { cards } from '#Root/mocks';

const initialState = [
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0 
];

const BoardDiv = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 100%;
  margin-right: 24px;
`;

const Card = styled.button`
  width: 95px;
  height: 95px;
  margin-bottom: 8px;
  position: relative;
  padding: 0;
  border: 0;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
`;

const Door = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
`;

const Board = () => {
  const [state, setState] = useState(initialState);

  const handleClick = index => {
    const newState = state.map((o, i) => {
      return i === index ? (o - 1) * (-1) : o;
    });

    setState(newState);
  }

  return (
    <BoardDiv>
      {cards.map( (card, index) => (
        <Card onClick={() => handleClick(index)}>
          <Img src={card} />
          <Door style={{opacity: state[index]}}/>
        </Card>
      ))}
    </BoardDiv>
  )
};

export default Board;
