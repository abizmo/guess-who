import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { cards } from "#Root/mocks";

const Img = styled.img`
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 4px solid #fd893c;
`;

const Character = () => {
  const [character, setCharacter] = useState("");

  const handleCharacter = () => {
    const index = Math.floor(Math.random() * 24);
    setCharacter(cards[index]);
  };

  useEffect(() => handleCharacter(), []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>This is me</h2>
      <Img onClick={handleCharacter} src={character ? character : null} />
    </div>
  );
};

export default Character;
