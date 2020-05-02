import React from 'react';
import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('../components/ParticlesBg'), { ssr: false });

const IndexPage = () => (
  <div id="home" className="row banner">
    <ParticlesBg />
    <div className="banner-text">
      <h1 className="responsive-headline">NBK</h1>
      <h3>Web developper.</h3>
      <hr />
      <ul className="social">
        <a href="#" className="button btn project-btn">
          <i className="fa fa-book" />
          Project
        </a>
        <a href="#" className="button btn github-btn">
          <i className="fa fa-github" />
          Github
        </a>
      </ul>
    </div>
  </div>
);

export default IndexPage;
