import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	color: ${props => props.theme.primary};
`;

const Bar = styled.header`
  background-color: #222;
  height: 50px;
  padding: 20px;
  color: white;
`;

const Header = ({BrandName}) => (
 <Bar className="header">
   <Title>{`Brand ${BrandName}`}</Title>
 </Bar>
);

export default Header;
