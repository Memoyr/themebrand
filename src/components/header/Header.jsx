import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon.jsx';
import { rgba } from 'polished';


const Bar = styled.header`
  background-color: ${props => props.theme.gradient ? props.theme.gradient : 'black'};
  height: 30px;
  padding: 20px;
  color: white;
  margin-bottom: 2rem;
  display: flex;
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
  margin-left: auto;
`;

const SettingButton = styled.button`
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  width: 42px;
  height: 42px;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    > svg {
      stroke: ${props => props.theme.black ? rgba(props.theme.black, 0.6) : 'black'};
    }
  }

`;


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onVisibilityChange(e);
  }

  render() {
    return (
      <Bar>
        <Title>{`Brand ${this.props.brandName}`}</Title>
        <AuthContainer>
           <SettingButton onClick={this.handleChange} >
             <Icon symbol="gear_20px-bkg-light" size="small" name="settings" stroke />
           </SettingButton>
        </AuthContainer>
      </Bar>
    );
  }
}


Header.propTypes = {
	brandName: PropTypes.string.isRequired,
};

export default Header;
