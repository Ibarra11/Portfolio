import React, { Component } from 'react';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/main.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;
