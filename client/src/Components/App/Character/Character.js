import React from 'react';
import styled from 'styled-components';

import { cards } from '#Root/mocks';

const character = cards[0];

const Img = styled.img`
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 4px solid #FD893C;
`;

const Character = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>This is me</h2>
      <Img src={character ? character : null} />
    </div>
  )
};

export default Character;
