import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

type Props = {
  children?: any;
  title?: string;
  router: any;
};

function Layout({ children, title = 'welcome', router: { pathname } }: Props) {
  const [background, setBackground] = useState<string>('');
  useEffect(() => {
    if (pathname !== '/') {
      setBackground('background-nav');
    }
  }, [pathname]);

  return (
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
        <link rel="stylesheet" href="/static/css/TimeLine.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MQJE8LRK9G"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-MQJE8LRK9G');
        </script>
      </Head>
      <header>
        <nav id="nav-wrap" className={background}>
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className={pathname === '/' ? 'current' : ''}>
              <a href="/">Home</a>
            </li>
            <li className={pathname === '/about' ? 'current' : ''}>
              <a href="/about">About</a>
            </li>
            <li className={pathname === '/resume' ? 'current' : ''}>
              <a href="/resume">Resume</a>
            </li>
            <li className={pathname === '/works' ? 'current' : ''}>
              <a href="/works">Works</a>
            </li>
            <li className={pathname === '/contact' ? 'current' : ''}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">{children}</div>
    </div>
  );
}

export default withRouter(Layout);
