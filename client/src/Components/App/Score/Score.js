import React, { useState } from 'react';

const initialState = [0, 0];

const Score = () => {
  const [state, setState] = useState(initialState);

  const handleScore = scorer => {
    setState([state[0] + (scorer === 0 && 1), state[1] + (scorer === 1 &&1)]);

  };

  return (
    <div>
      <h2>Who won?</h2>
      <div>
        <button onClick={() => handleScore(0)}>You</button>
          <div>
            <span>{state[0]}</span>:<span>{state[1]}</span>
          </div>
        <button onClick={() => handleScore(1)}>Your opponent</button>
      </div>
      <button onClick={() => setState(initialState)}>Clear</button>
    </div>
  )
};

export default Score;
