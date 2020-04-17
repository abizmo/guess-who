import React, { useState } from 'react';
import styled from 'styled-components';

const initialState = [0, 0];

const ScoreDiv = styled.div`
  width: 120px;
`
const Score = () => {
  const [state, setState] = useState(initialState);

  const handleScore = scorer => {
    setState([state[0] + (scorer === 0 && 1), state[1] + (scorer === 1 && 1)]);
  };

  return (
    <ScoreDiv>
      <h2>Who won?</h2>
      <div>
        <button onClick={() => handleScore(0)}>You</button>
          <div>
            <span>{state[0]}</span>:<span>{state[1]}</span>
          </div>
        <button onClick={() => handleScore(1)}>Your opponent</button>
      </div>
      <button onClick={() => setState(initialState)}>Clear</button>
    </ScoreDiv>
  )
};

export default Score;
