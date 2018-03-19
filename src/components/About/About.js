import React, { Component } from 'react';
import './About.css';
import cssImg from '../../assets/CSS_Mobile@3x.png';
import htmlImg from '../../assets/HTML_Mobile@3x.png';
import jsImg from '../../assets/Javascript_mobile@3x.png';
import jqImg from '../../assets/JQuery_mobile@3x.png';
import metImg from '../../assets/meteor_mobile@3x.png';
import nodeImg from '../../assets/nodejs_mobile@3x.png';
import reactImg from '../../assets/Reactjs_mobile@3x.png';
import reduxImg from '../../assets/Redux_Mobile@3x.png';
import sassImg from '../../assets/Sass_mobile@3x.png';

class About extends Component {
  render() {
    return (
      <div className="About-Container">
        <div className="Part-I">
          <h3> About Max </h3>
          <hr />
          <p>
            {' '}
            Max is an entrepreneurial minded, ambitious front end developer with
            substantial back end exposure.Max is an entrepreneurial minded,
            ambitious front end developer with substantial back end exposure.Max
            is an entrepreneurial minded, ambitious front end developer with
            substantial back end exposure.{' '}
          </p>
        </div>
        <div className="Part-II">
          <h3> Tech Stack </h3>
          <hr />
          <div className="Tech-Stack">
            <img src={cssImg} alt="CSS" />
            <img src={htmlImg} alt="HTML5" />
            <img src={jsImg} alt="Javascript" />
            <img src={jqImg} alt="jQuery" />
            <img src={metImg} alt="Meteor" />
            <img src={nodeImg} alt="NodeJS" />
            <img src={reactImg} alt="ReactJS" />
            <img src={reduxImg} alt="Redux" />
            <img src={sassImg} alt="SASS" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
