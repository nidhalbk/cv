import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import Wrapper from 'components/Carousel/Wrapper';

export default () => (
  <Wrapper>
    <h1>Created using :</h1>
    <Carousel autoPlay={3000} animationSpeed={3000} slidesPerPage={5} slidesPerScroll={3} infinite>
      <img className="img" src="static/images/home/babel.png" alt="babel" />
      <img className="img" src="static/images/home/formik.png" alt="formik" />
      <img className="img" src="static/images/home/docker.png" alt="docker" />
      <img className="img" src="static/images/home/eslint.png" alt="eslint" />
      <img className="img" src="static/images/home/github.png" alt="github" />
      <img className="img" src="static/images/home/material-ui.png" alt="material-ui" />
      <img className="img" src="static/images/home/nextjs.png" alt="nextjs" />
      <img className="img" src="static/images/home/reactjs.png" alt="reactjs" />
      <img className="img" src="static/images/home/WebStorm.png" alt="webstorm" />
      <img className="img" src="static/images/home/ts.png" alt="typescript" />
    </Carousel>
    <p>
      inspired from {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://github.com/nordicgiant2/react-nice-resume" target="_blank">
        here
      </a>
    </p>
  </Wrapper>
);
