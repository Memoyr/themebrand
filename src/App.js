import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/header/Header.jsx';
import { marketTheme, spiritTheme, cloudTheme } from './constants/theme.js';
import Button from './components/button/Button.jsx';

import './app.css';

const Container = styled.div`
  height: 100vh;
`;

const Content = styled.div`
  margin: 0 5rem;
`;

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
        <Container>
          <Header brandName={this.state.name} color/>
          <Content>
            <Button onClick={() => this.switchBrand(spiritTheme, 'Spirit')}>Spirit</Button>
            <Button onClick={() => this.switchBrand(cloudTheme, 'Cloud')}>Cloud</Button>
            <Button onClick={() => this.switchBrand(marketTheme, 'Market')}>Market</Button>
          </Content>
        </Container>
      </ThemeProvider>
    );
  }

  switchBrand(newBrand, newName) {
   this.setState({brand: newBrand, name: newName})
  }

}

export default App;
