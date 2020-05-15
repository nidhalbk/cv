import React from 'react';

const AboutPage: React.FunctionComponent = () => (
  <div id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src="static/images/me.jpeg" alt="Nidhal BEN KHALIFA" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>

        <p>bio</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Nidhal BEN KHALIFA</span>
              <br />
              <span>
                street 9 april
                <br />
                Sidi Bou Ali Sousse, 4040
              </span>
              <br />
              <span>+216 55 322 677</span>
              <br />
              <span>contact@nbk.tn</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="static/cv.pdf" className="button" target="_blank">
                <i className="fa fa-download" />
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
