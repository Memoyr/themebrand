import React, { Component } from 'react';
const { ThemeProvider } = require('styled-components');
const { marketTheme } = require('../src/constants/theme.js');

export default class Wrapper extends Component {

  render() {
    return (
      <ThemeProvider theme={marketTheme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
