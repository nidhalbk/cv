const routes = require('next-routes');

module.exports = routes()
  /* Screens */
  .add('index', '/', 'index')
  .add('about', '/about', 'about')
  .add('resume', '/resume', 'resume')
  .add('works', '/works', 'works')
  .add('contact', '/contact', 'contact');
