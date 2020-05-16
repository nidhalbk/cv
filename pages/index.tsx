import React from 'react';
import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('../components/ParticlesBg'), { ssr: false });
const Carousel = dynamic(() => import('components/Carousel'), { ssr: false });

const IndexPage = () => (
  <div id="home" className="row banner">
    <ParticlesBg />
    <div className="banner-text">
      <h1 className="responsive-headline">NBK</h1>
      <h3>Senior full stack JS/PHP developper.</h3>
      <hr />
      <ul className="social">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://github.com/nidhalbk/cv" className="button btn project-btn" target="_blank">
          <i className="fa fa-book" />
          Project
        </a>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://github.com/nidhalbk" className="button btn github-btn" target="_blank">
          <i className="fa fa-github" />
          Github
        </a>
      </ul>
    </div>
    <Carousel />
  </div>
);

export default IndexPage;
