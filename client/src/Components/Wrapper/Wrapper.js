import React from 'react';
import styled from 'styled-components';

const WrapperDiv= styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
  max-height: 736px;
  max-width: 1024px;
  margin: 0 auto;
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
