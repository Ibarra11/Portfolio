import React, { Component } from 'react';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './styles/main.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Skills />
          <Projects />
      </div>
    );
  }
}

export default App;
