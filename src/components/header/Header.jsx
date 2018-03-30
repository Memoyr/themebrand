import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon.jsx';
import { rgba } from 'polished';

// background-color: ${props => props.theme.gradient ? props.theme.gradient : 'black'};

const Bar = styled.header`
  background-color: ${props => props.theme.primary};
  height: 30px;
  padding: 20px 0;
  color: white;
  margin-bottom: 2rem;
  display: flex;
  box-shadow: 0px 2px 3px 0px rgba(179,179,179,0.35);
  position: fixed;
  top: 0;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
	font-size: 1.5em;
  margin: 0 2rem;
	color: ${props => props.theme.white};
  display: flex;
  align-self: center;
`;
const TitleTxt = styled.span`
  margin-left: .5rem;
  align-self: center;
`;

const AuthContainer = styled.div`
	font-size: 1.5em;
  margin: 0 2rem;
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
  > svg {
    transition: fill ease .4s;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    > svg {
      fill: ${props => props.theme.black ? rgba(props.theme.black, 0.6) : 'black'};
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
        <Title>
          <Icon symbol="logo-placeholder" size="medium" name="logo-placeholder" />
          <TitleTxt>{`Brand ${this.props.brandName}`}</TitleTxt>
        </Title>
        <AuthContainer>
           <SettingButton onClick={this.handleChange} >
             <Icon symbol="gear" size="small" name="settings" />
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
