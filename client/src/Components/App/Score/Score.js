import React, { useContext } from "react";
import styled from "styled-components";

import Context from "#Root/context";
import { ADD_POINT, RESET_SCORE } from "#Root/context/actions";

const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: white;
  background-color: #fd893c;
  padding: 8px 4px;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.2);
`;

const ScoreDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const Span = styled.span`
  font-size: 60px;
`;

const Score = () => {
  const { state, dispatch } = useContext(Context);
  const { score } = state;

  const addPoint = scorer => {
    dispatch({
      type: ADD_POINT,
      payload: scorer
    });
  };

  const resetScore = () => dispatch({ type: RESET_SCORE });

  return (
    <ScoreDiv>
      <h2>Who won?</h2>
      <div style={{ marginBottom: "24px" }}>
        <Button onClick={() => addPoint(0)}>You</Button>
        <Span>
          {score[0]}:{score[1]}
        </Span>
        <Button
          onClick={() => addPoint(1)}
          style={{
            backgroundColor: "#7D72F0"
          }}
        >
          Your opponent
        </Button>
      </div>
      <Button
        onClick={resetScore}
        style={{
          color: "black",
          backgroundColor: "#D3D7CF"
        }}
      >
        Reset Match
      </Button>
    </ScoreDiv>
  );
};

export default Score;
