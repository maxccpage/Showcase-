import React, { Component } from 'react';
import './App.css';
import About from '../About/About';
import ShowCase from '../Showcase/Showcase';
import Contact from '../Contact/Contact';
import CircularProgressExampleSimple from './Loading';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const RenderMax = () => {
      return (
        <div className="Intro-Container">
          <h1> Max Page </h1>
          <p> Front End Developer </p>
          <hr />
          <p id="Scroll">
            {' '}
            Scroll to <span> view </span>projects{' '}
          </p>
        </div>
      );
    };
    return (
      <MuiThemeProvider>
        <div className="App-Container">
          {this.state.isLoading === false ? (
            <RenderMax />
          ) : (
            <CircularProgressExampleSimple />
          )}
          <About />
          <ShowCase />
          <Contact />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
