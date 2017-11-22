import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon.jsx';


const Bar = styled.header`
  background-color: black;
  height: 30px;
  padding: 20px;
  color: white;
  margin-bottom: 2rem;

`;

const Title = styled.h1`
	font-size: 1.5em;
  margin: 0;
	color: ${props => props.theme.primary};
`;

const AuthContainer = styled.div`
	font-size: 1.5em;
  margin: 0;
	color: ${props => props.theme.primary};
`;


const Header = ({brandName}) => (
 <Bar>
   <Title>{`Brand ${brandName}`}</Title>
   <AuthContainer>
    <Icon symbol="person_48px-bkg-light" size="small" name="user" />
   </AuthContainer>
 </Bar>
);

export default Header;

Header.propTypes = {
	brandName: PropTypes.string.isRequired,
};
