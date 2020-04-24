import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import Context from "#Root/context";
import { NEW_GAME } from "#Root/context/actions";
import { cards } from "#Root/mocks";

const Img = styled.img`
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 4px solid #fd893c;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  color: black;
  background-color: #d3d7cf;
  padding: 8px 4px;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.2);
`;

const Character = () => {
  const { dispatch } = useContext(Context);
  const [character, setCharacter] = useState("");

  const selectCharacter = () => {
    const index = Math.floor(Math.random() * 24);
    setCharacter(cards[index]);
  };

  const newGame = () => {
    selectCharacter();
    dispatch({
      type: NEW_GAME
    });
  };

  useEffect(() => selectCharacter(), []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>This is me</h2>
      <Img src={character ? character : null} />
      <Button onClick={newGame}>New Game</Button>
    </div>
  );
};

export default Character;
