import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import Button from '../button/Button';
import { rgba } from 'polished';


const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  margin: 0;
  border-bottom: solid 1px ${props => props.theme.gray ? props.theme.gray : 'black'};
  transition: all ease .5s;
  &:first-child {
    border-top: solid 1px ${props => props.theme.gray ? props.theme.gray : 'black'};
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.blue ? props.theme.blue : 'blue'};
  }
`;

const ListLink = styled.a`
  padding: 0 10px;
  color: ${props => props.theme.blue ? props.theme.blue : 'blue'};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.gray ? props.theme.gray : '#999'};
  }
  ${ListItem}:hover &  {
     color: ${props => props.theme.gray ? props.theme.gray : '#999'};
   }
`;

class MenuList extends Component {
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
      <List>
        <ListItem>
          <ListLink>Settings</ListLink>
        </ListItem>
        <ListItem>
          <ListLink>
            <Button onClick={() => this.handleThemeChange('market')}>M</Button>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink>
            <Button onClick={() => this.handleThemeChange('spirit')}>S</Button>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink>
            <Button onClick={() => this.handleThemeChange('cloud')}>C</Button>
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink>Log Out</ListLink>
        </ListItem>
      </List>
    );
  }
}


MenuList.propTypes = {
};

export default MenuList;
