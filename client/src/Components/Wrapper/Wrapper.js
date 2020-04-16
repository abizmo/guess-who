import React from 'react';
import styled from 'styled-components';

const WrapperDiv= styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
`

const Wrapper = ({title, children}) => {
  return (
    <WrapperDiv>
      <Title>{ title }</Title>
      { children }
    </WrapperDiv>
  )
};

export default Wrapper;
