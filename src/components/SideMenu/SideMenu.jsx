import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { rgba } from 'polished';
import MenuList from '../MenuList/MenuList';


const Container = styled.div`
  color: #5d5d5d;
  padding: 10px 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 250px;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transform: ${props => props.open ? 'translate3d(-250px, 0, 0)' : ''};
  overflow-y: auto;
  right: -250px;
  border-left: ${props => props.theme.primary} solid 1px;
  background-color: #dbdcdc;
`;

const CloseButton = styled.button`
  display: flex;
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  width: 42px;
  height: 42px;
  margin: 0 10px 10px auto;

  &:hover {
    cursor: pointer;
    > svg {
      stroke: ${props => props.theme.primary ? rgba(props.theme.black, 0.6) : 'black'};
    }
  }
`;


class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleChange(e) {
    this.props.onVisibilityChange(e);
  }

  handleThemeChange(theme) {
    this.props.onThemeChange(theme);
  }

  render() {
    return (
      <Container open={this.props.open}>
        <CloseButton onClick={this.handleChange} >
          <Icon symbol="cross_20px-bkg-light" stroke size="medium"/>
        </CloseButton>
        <MenuList onThemeChange={this.handleThemeChange}/>
      </Container>
    );
  }
}


SideMenu.propTypes = {
  open: PropTypes.bool
};

export default SideMenu;
