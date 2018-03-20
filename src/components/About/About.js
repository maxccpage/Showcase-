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
            An entrepreneurial minded, ambitious front end developer with an eye
            for design. I began my journey in the tech industry shortly after
            high school, starting a web design business to fund my failing start
            up, WeFix Home Solutions. I always had an interest in coding yet
            decided to skip the computer science degree and dive into a six
            month accelerated web/app development program at RED Academy where
            my interest quickly transformed into an obsession. When im not
            coding in my living room, you'll find me competing at hackathons,
            making friends (networking) at local tech events or critiquing new
            albums on the billboard 100.
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
