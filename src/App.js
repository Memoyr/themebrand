import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/header/Header.jsx';
import { marketTheme, spiritTheme, cloudTheme } from './constants/theme.js';
import Button from './components/button/Button.jsx';
import BrandBage from './components/BrandBadge/BrandBadge';
import SideMenu from './components/SideMenu/SideMenu';

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
    this.handleMenuChange = this.handleMenuChange.bind(this);

    this.state = {
      brand: marketTheme,
      name: 'M',
      sideMenuOpen: false
    }
  }

  handleMenuChange(e) {
    this.setState({sideMenuOpen: e});
  }

  switchBrand(newBrand, newName) {
   this.setState({brand: newBrand, name: newName})
  }

  render() {

    return (
      <ThemeProvider theme={this.state.brand}>
        <Container>
          <Header brandName={this.state.name} color/>
          <Content>
            <Button onClick={() => this.switchBrand(spiritTheme, 'S')}>S</Button>
            <Button onClick={() => this.switchBrand(cloudTheme, 'C')}>C</Button>
            <Button onClick={() => this.switchBrand(marketTheme, 'M')}>M</Button>

            <BrandBage onClick={() => this.handleMenuChange(this.state.sideMenuOpen ? false : true)} />
            <SideMenu open={this.state.sideMenuOpen} onVisibilityChange={this.handleMenuChange} />
          </Content>
        </Container>
      </ThemeProvider>
    );
  }

}

export default App;
