import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/header/Header.jsx';
import { marketTheme, spiritTheme, cloudTheme } from './constants/theme.js';
import Button from './components/button/Button.jsx';

import './app.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      brand: marketTheme,
      name: 'Market'
    }
  }

  render() {

    return (
      <ThemeProvider theme={this.state.brand}>
        <div className="app">
          <Header BrandName={this.state.name}/>
          <Button onClick={() => this.switchBrand(spiritTheme, 'Spirit')}>Upgrade and buy Spirit</Button>
          <Button onClick={() => this.switchBrand(cloudTheme, 'Cloud')}>Upgrade and buy Cloud</Button>
          <Button onClick={() => this.switchBrand(marketTheme, 'Market')}>Back to Market</Button>

        </div>
      </ThemeProvider>
    );
  }

  switchBrand(newBrand, newName) {
   this.setState({brand: newBrand, name: newName})
  }

}

export default App;
