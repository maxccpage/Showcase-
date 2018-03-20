import React, { Component } from 'react';
import './App.css';
import About from '../About/About';
import ShowCase from '../Showcase/Showcase';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <div className="Intro-Container">
          <h1> Max Page </h1>
          <p> Front End Developer </p>
          <hr />
          <p id="Scroll">
            {' '}
            Scroll to <span> view </span>projects{' '}
          </p>
        </div>
        <About />
        <ShowCase />
        <Contact />
      </div>
    );
  }
}

export default App;
