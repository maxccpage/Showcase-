import React, { Component } from 'react';
import email from '../../assets/Email_mobile@3x.png';
import gh from '../../assets/Contact_Github_Mobile@3x.png';
import linkedIn from '../../assets/Aboutme_Linkedin_mobile@3x.png';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact-Container">
        <h3> Contact </h3>
        <hr />
        <img src={email} alt="Email" />
        <p> maxccpage@gmail.com </p>
        <img src={gh} alt="GitHub" />
        <p> github.com/maxccpage </p>
        <img src={linkedIn} alt="Linked In" />
        <p id="Phone"> or (647) 880-7430 </p>
      </div>
    );
  }
}

export default Contact;
