import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import Icon from './components/Icon/Icon';
import IconCard from './components/IconCard/IconCard';
import './app.css';
import iconList from './data/IconList';



const KEYS_TO_FILTERS = ['name', 'id'];

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchFound: false
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render() {
    const filteredIcons = iconList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Icon Kit</h1>
        </header>
        <div className="content">
          <p className="app-intro">
            To get started ... <code>TBD</code>.<br/>
          </p>
          <ul className="documentation">
            <li><a href="" className="documentation__link">TBD: Icon package directory (git)</a></li>
            <li><a href="" className="documentation__link">TBD: How to setup with webpack</a></li>
            <li><a href="" className="documentation__link">TBD: How to setup with grunt </a></li>
          </ul>
          <a href="/_TRANSVERSAL/IconKit/documentation" className="styleguide-link">React UI-kit styleguide</a>
          <Icon symbol="twitter" customClass="test" size="small" name="Twitter"/>
          {/* <Icon symbol="twitter" customClass="test" size="small" name="Twitter"/>
             <Icon symbol="twitter" customClass="test2" size="large" name="Twitter" stroke/> */}

          <SearchInput className="search-input" onChange={this.searchUpdated} />

          <ul className="list">
          {filteredIcons.map((icon, idx) => {
            return (
              <IconCard key={ idx } { ...icon } />
            )
          })}
          </ul>
        </div>
      </div>
    );
  }

  searchUpdated (term) {
   this.setState({searchTerm: term})
  }


}

export default App;
