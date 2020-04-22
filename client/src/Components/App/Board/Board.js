import React, { useState } from 'react';
import styled from 'styled-components';

import { cards } from '#Root/mocks';

const initialVisibles = [
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
  align-content: space-around;
  height: 100%;
  margin-right: 24px;
`;

const Card = styled.button`
  width: 110px;
  height: 110px;
  position: relative;
  outline: none;
  padding: 0;
  border: 1px solid white;
  border-radius: 4px;
  box-shadow: 0 2px 6px 2px rgba( 0, 0, 0, .2);
`;

const Img = styled.img`
  height: auto;
  width: 100%;
  border-radius: 4px;
`;

const Door = styled.div`
  width: 100%;
  height: 100%;
  background-color: #7D72F0;
  position: absolute;
  top: 0;
  transition: opacity .5s ease-in-out;
  left: 0;
  border-radius: 4px;
`;

const Board = () => {
  const [visibles, setVisibles] = useState(initialVisibles);

  const handleClick = index => {
    const newVisibles = visibles.map((o, i) => {
      return i === index ? (o - .9) * (-1) : o;
    });

    setVisibles(newVisibles);
  }

  return (
    <BoardDiv>
      {cards.map( (card, index) => (
        <Card onClick={() => handleClick(index)}>
          <Img src={card} />
          <Door style={{opacity: visibles[index]}}/>
        </Card>
      ))}
    </BoardDiv>
  )
};

export default Board;
