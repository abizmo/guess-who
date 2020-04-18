import React, { useState } from 'react';
import styled from 'styled-components';

const initialState = [0, 0];

const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: white;
  background-color: #FD893C;
  padding: 8px 4px;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 2px 6px 2px rgba(0,0,0,.2);
`;

const ScoreDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const Span = styled.span`
  font-size: 60px;
`

const Score = () => {
  const [state, setState] = useState(initialState);

  const handleScore = scorer => {
    setState([state[0] + (scorer === 0 && 1), state[1] + (scorer === 1 && 1)]);
  };

  return (
    <ScoreDiv>
      <h2>Who won?</h2>
      <div style={{marginBottom: '24px'}}>
        <Button onClick={() => handleScore(0)}>You</Button>
        <Span>{state[0]}:{state[1]}</Span>
        <Button 
          onClick={() => handleScore(1)}
          style={{
            backgroundColor: '#7D72F0'
          }}
        >Your opponent</Button>
      </div>
      <Button 
        onClick={() => setState(initialState)}
        style={{
          color: 'black',
          backgroundColor: '#D3D7CF'
        }}
      >Reset Match</Button>
    </ScoreDiv>
  )
};

export default Score;
