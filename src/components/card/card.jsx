import React from 'react';
import styled from 'styled-components';
const Block = styled.div`
  background: transparent;
  display: flex;
  flex-basis: 400px;
  flex-shrink: 0;
  min-height: 200px;
  padding-bottom: 2rem;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.24);
  margin-right: 2rem;
  background-color: #fff;
  margin: .5rem;
`;
const Header = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  padding: .8rem 1rem;
  align-self: flex-start;
  width: 100%;
  border-bottom: solid 1px #ccc;
  background-color: ${props => props.theme.primary};
`;

const Card = ({title}) => (
 <Block>
  <Header>{title}</Header>
 </Block>
);

export default Card;
