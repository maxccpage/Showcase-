import React, { Component } from 'react';
import email from '../../assets/contact.png';
import gh from '../../assets/github-logo.png';
import linkedIn from '../../assets/linkedin (1).png';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Con-Container">
        <h3> Contact </h3>
        <hr />
        <div className="Contact-Container">
          <a href="mailto:maxccpage@gmail.com">
            <img src={email} alt="Email" />
          </a>
          <a href="http://www.github.com/maxccpage">
            <img src={gh} alt="GitHub" />{' '}
          </a>
          <a href="http://www.linkedin.com/in/max-page-416581133">
            <img src={linkedIn} alt="Linked In" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
