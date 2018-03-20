import React, { Component } from 'react';
import jammming from '../../assets/jammming.png';
import ravenous from '../../assets/ravenous.png';
import boomtown from '../../assets/boomtown.png';
import instanews from '../../assets/instanews.png';
import maydu from '../../assets/maybdu.png';
import rideshare from '../../assets/rideshare.png';
import './Showcase.css';

class ShowCase extends Component {
  render() {
    return (
      <div className="Showcase-Container">
        <h3> Recent Projects </h3>
        <hr />
        <div className="Recent-Projects">
          {/* Jammming Showcase  */}
          <div className="Ind-Project">
            <img src={jammming} />
            <h6>
              {' '}
              Ja<span>mmm</span>ing{' '}
            </h6>
            <p>
              {' '}
              Jammming is a web application that allows users to search for
              their favourite songs, create a playlist and save their new
              playlist to their spotify account{' '}
            </p>
            <a href="http://maxccpage-jammming.herokuapp.com">
              {' '}
              View Project >{' '}
            </a>
            <a href="https://github.com/maxccpage/Jamming"> View Code > </a>
          </div>
          {/* Ravenous Showcase  */}
          <div className="Ind-Project">
            <img src={ravenous} />
            <h6>
              {' '}
              <span>rav</span>enous{' '}
            </h6>
            <p>
              {' '}
              ravenous is a web application that allows users to search and find
              restaurants located near them. Users are able to sort their
              results by best match, highest rated and most reviewed.
            </p>
            <a href="http://maxccpage-ravenous.herokuapp.com">
              {' '}
              View Project >{' '}
            </a>
            <a href="https://github.com/maxccpage/Ravenous-"> View Code > </a>
          </div>
          {/* Instanews Showcase  */}
          <div className="Ind-Project">
            <img src={instanews} />
            <h6>
              {' '}
              insta<span>news</span>{' '}
            </h6>
            <p>
              {' '}
              extra extra read all about it! instanews is a site that users can
              visit to get the latest on their favourite topics including
              technology, sports and much more!
            </p>
            <a href="https://maxccpage.github.io/Instanews-/">
              {' '}
              View Project >{' '}
            </a>
            <a href="https://github.com/maxccpage/Instanews-"> View Code > </a>
          </div>
          {/* Boomtown Showcase */}
          <div className="Ind-Project">
            <img src={boomtown} />
            <h6>
              {' '}
              <span>boom</span>town{' '}
            </h6>
            <p>
              {' '}
              boomtown is an item sharing platform users can visit to share and
              borrow items from their neighbours! Remember that time your lawn
              mower broke mid mow? Borrow a better one from Jen down the street!
            </p>
            <a href="http://maxccpage-boomtown.herokuapp.com">
              {' '}
              View Project (Web Only) >{' '}
            </a>
            <a href="https://github.com/maxccpage/Boomtown"> View Code > </a>
          </div>

          <div className="Ind-Project">
            <img src={maydu} />
            <h6>
              {' '}
              may<span>du</span>{' '}
            </h6>
            <p>
              {' '}
              (currently Under Developent) - maydu is an application built in
              meteor, for university students to connect with fellow classmates
              and organize study groups. myself and three other developers took
              on this side project in feburary 2018 and will continue
              development in our spare time.
            </p>
            <a href="https://github.com/maxccpage/Maydu"> View Code > </a>
          </div>
          <div className="Ind-Project">
            <img id="Ride-Share-Img" src={rideshare} />
            <h6>
              {' '}
              ride<span>share</span>{' '}
            </h6>
            <p>
              {' '}
              (currently under development) - rideshare is geared towards
              reducing c02 emission in toronto. a mobile application myself and
              three other developers began working on at the hack for good
              hackathon in march 2018. we were able to complete 70% of the
              applications functionality in 36 hours as part of the hackathons
              expectations and plan to continue development on our free time!
            </p>
            <a href="https://github.com/maxccpage/Rideshare"> View Code > </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCase;
