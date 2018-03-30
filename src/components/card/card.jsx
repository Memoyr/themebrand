import React from 'react';
import styled from 'styled-components';
const Block = styled.div`
  background: transparent;
  display: flex;
  flex-basis: 33.33%;
  min-height: 200px;
  border: solid 1px #ccc;
  border-radius: .1rem;
  padding: 2rem 0;
  box-shadow: 2px 5px 3px 0px rgba(179,179,179,0.35);
  &:not(:last-child) {margin-right: 2rem};
`;
const Header = styled.div`
  color: #5d5d5d;
  padding: 0 2rem 1rem 2rem;
  align-self: flex-start;
  width: 100%;
  border-bottom: solid 1px #ccc;
`;

const Card = ({title}) => (
 <Block>
  <Header>{title}</Header>
 </Block>
);

export default Card;
