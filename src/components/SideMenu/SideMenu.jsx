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

const ListLink = styled.a`
  padding: 10px;
  flex: 1 1 auto;
  color: ${props => props.theme.blue ? props.theme.blue : 'blue'};
  transition: all ease .5s;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.gray ? props.theme.gray : '#999'};
    background-color: white;
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
    const data =[
      {"item":<ListLink>Settings</ListLink>},
      {"item":<ListLink onClick={() => this.handleThemeChange('spirit')}>S</ListLink>},
      {"item":<ListLink onClick={() => this.handleThemeChange('market')}>M</ListLink>},
      {"item":<ListLink onClick={() => this.handleThemeChange('cloud')}>S</ListLink>},
      {"item":<ListLink>Log out</ListLink>}
    ];

    return (
      <Container open={this.props.open}>
        <CloseButton onClick={this.handleChange} >
          <Icon symbol="cross_20px-bkg-light" size="medium" name="close" asStroke />
        </CloseButton>
        <MenuList onThemeChange={this.handleThemeChange} data={data}/>
      </Container>
    );
  }
}


SideMenu.propTypes = {
  open: PropTypes.bool
};

export default SideMenu;
