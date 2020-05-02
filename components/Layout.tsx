import React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = 'welcome' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/css/default.css" />
      <link rel="stylesheet" href="/static/css/layout.css" />
      <link rel="stylesheet" href="/static/css/media-queries.css" />
      <link rel="stylesheet" href="/static/css/magnific-popup.css" />
    </Head>
    <header>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a className="smoothscroll" href="/resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="content">{children}</div>
  </div>
);

export default Layout;
