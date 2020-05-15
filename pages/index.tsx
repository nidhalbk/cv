import React from 'react';
import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('../components/ParticlesBg'), { ssr: false });
const Carousel = dynamic(() => import('components/Carousel'), { ssr: false });

const IndexPage = () => (
  <div id="home" className="row banner">
    <ParticlesBg />
    <div className="banner-text">
      <h1 className="responsive-headline">NBK</h1>
      <h3>Sinior full stack JS/PHP developper.</h3>
      <hr />
      <ul className="social">
        <a href="https://github.com/nidhalbk/cv" className="button btn project-btn">
          <i className="fa fa-book" />
          Project
        </a>
        <a href="https://github.com/nidhalbk" className="button btn github-btn">
          <i className="fa fa-github" />
          Github
        </a>
      </ul>
    </div>
    <Carousel />
  </div>
);

export default IndexPage;
