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
  padding: 0;
  margin: 0;
  border-bottom: solid 1px ${props => props.theme.gray ? props.theme.gray : 'black'};
  transition: all ease .5s;
  display: flex;
  flex-direction:row;

  &:first-child {
    border-top: solid 1px ${props => props.theme.gray ? props.theme.gray : 'black'};
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.blue ? props.theme.blue : 'blue'};
  }
`;



class MenuList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  //  this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleChange(e) {
    this.props.onVisibilityChange(e);
  }

  /* handleThemeChange(theme) {
    this.props.onThemeChange(theme);
  } */

  render() {
    const listItems = this.props.data.map((d,i) => <ListItem key={i}>{d.item}</ListItem>);
    return (
      <List>
        {listItems}
      </List>
    );
  }
}


MenuList.propTypes = {
};

export default MenuList;
