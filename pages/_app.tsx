import React from 'react';
import App from 'next/app';
import 'react-vertical-timeline-component/style.min.css';
import Layout from 'components/Layout';
// import Router from 'next/router';
// import NProgress from 'nprogress';
//
// Router.onRouteChangeStart = () => {
//   NProgress.start();
// };
//
// Router.onRouteChangeComplete = route => {
//   if (window) {
//     const isFaq = route.split('?')[0] === '/faq';
//     const queryParams = new URLSearchParams(route.split('?')[1]);
//     const skipScroll = queryParams.get('active-order') || isFaq;
//     if (!skipScroll) {
//       window.scrollTo(0, 10);
//     }
//
//     NProgress.done();
//   }
// };
//
// Router.onRouteChangeError = () => {
//   NProgress.done();
// };

class MyApp extends App {
  // constructor(props) {
  //   super(props);
  // }
  //
  // async componentDidMount() {
  //
  // }
  //
  // async componentDidUpdate() {
  //   const {
  //     apollo,
  //     router: { route },
  //   } = this.props;
  //   const { initialStateLoaded } = this.state;
  //   if (route === '/' && initialStateLoaded) {
  //     // eslint-disable-next-line react/no-did-update-set-state
  //     this.setState({ initialStateLoaded: false });
  //   }
  //
  //   if (!initialStateLoaded && route !== '/') {
  //     await initiateLocalCache(apollo);
  //     // eslint-disable-next-line react/no-did-update-set-state
  //     this.setState({ initialStateLoaded: true });
  //   }
  // }

  render() {
    const { Component, pageProps } = this.props;
    // if (!this.state.initialStateLoaded && this.props.router.route !== '/')
    //   return <h1>Loading....</h1>;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
export default MyApp;
