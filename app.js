var site = require('apostrophe-site')();

site.init({

  // This line is required and allows apostrophe-site to use require() and manage our NPM modules for us.
  root: module,
  shortName: 'cold-dog-soup',
  hostName: 'cold-dog-soup',
  title: 'Cold Dog Soup',
  sessionSecret: 'guy clark',
  adminPassword: 'demo',
  address: '0.0.0.0',
  port: 3000,

  // Force a2 to prefix all of its URLs. It still
  // listens on its own port, but you can configure
  // your reverse proxy to send it traffic only
  // for URLs with this prefix. With this option
  // "/" becomes a 404, which is supposed to happen!

  // prefix: '/test',

  // If true, new tags can only be added by admins accessing
  // the tag editor modal via the admin bar. Sometimes useful
  // if your folksonomy has gotten completely out of hand
  lockTags: false,

  // Give users a chance to log in if they attempt to visit a page
  // which requires login
  secondChanceLogin: true,

  locals:  require('./lib/locals.js'),

  // you can define lockups for areas here

  // Here we define what page templates we have and what they will be called in the Page Types menu.

  // For html templates, the 'name' property refers to the filename in ./views/pages, e.g. 'default'
  // refers to '/views/pages/default.html'.

  // The name property can also refer to a module, in the case of 'blog', 'map', 'events', etc.

  pages: {
    types: [
      { name: 'default', label: 'Default' }
    ]
  },

  // These are the modules we want to bring into the project.
  modules: {
    // Styles required by the new editor, must go FIRST
    'apostrophe-editor-2': {},
    'apostrophe-ui-2': {},
    'apostrophe-browserify': {
      files: ['./public/js/modules/_site.js']
    }
  },

  // These are assets we want to push to the browser.
  // The scripts array contains the names of JS files in /public/js,
  // while stylesheets contains the names of LESS files in /public/css
  assets: {
    stylesheets: ['site']
  }
});
