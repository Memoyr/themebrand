import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/header/Header.jsx';
import { marketTheme, spiritTheme, cloudTheme } from './constants/theme.js';
import BrandBage from './components/BrandBadge/BrandBadge';
import SideMenu from './components/SideMenu/SideMenu';
import Card from './components/card/card';

import './app.css';

const Container = styled.div`
  background-color: #f1f1f1;
`;

const Content = styled.div`
  margin: 0 5rem;
  display: flex;
  padding: 8rem 0;

`;

const CardList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

class App extends Component {

  constructor (props) {
    super(props)
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.handleChangeBrand = this.handleChangeBrand.bind(this);

    this.state = {
      brand: marketTheme,
      name: 'M',
      sideMenuOpen: false
    }
  }

  handleMenuChange(visibility) {
    this.setState({sideMenuOpen: visibility});
  }

  handleChangeBrand(newTheme) {
    (newTheme === 'spirit') ? this.handleSwitchTheme(spiritTheme, 'S') :
    (newTheme === 'market') ? this.handleSwitchTheme(marketTheme, 'M') :
    (newTheme === 'cloud') ? this.handleSwitchTheme(cloudTheme, 'C') : '';

  }

  handleSwitchTheme(newBrand, newName) {
   this.setState({brand: newBrand, name: newName})
  }

  render() {

    return (
      <ThemeProvider theme={this.state.brand}>
        <Container>
          <Header brandName={this.state.name}
            onVisibilityChange={() => this.handleMenuChange(this.state.sideMenuOpen ? false : true)} />
          <Content>
            <CardList>
              <Card title="This is it"/>
              <Card title="This is it"/>
              <Card title="This is it"/>
              <Card title="This is it"/>
              <Card title="This is it"/>
              <Card title="This is it"/>
              <Card title="This is it"/>
              <Card title="This is it"/>
            </CardList>

            <SideMenu open={this.state.sideMenuOpen} onVisibilityChange={() => this.handleMenuChange(this.state.sideMenuOpen ? false : true)}
              onThemeChange={this.handleChangeBrand}
             />
          </Content>
        </Container>
      </ThemeProvider>
    );
  }

}

export default App;
//<BrandBage onClick={() => this.handleMenuChange(this.state.sideMenuOpen ? false : true)} />
