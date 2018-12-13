Package.describe({
  name: 'mozfet:autoform-materialize-nouislider',
  summary: 'Material styled slider for autoform.',
  version: '3.0.0',
  git: 'https://github.com/mozfet/meteor-autoform-nouislider'
})

Npm.depends({
})

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.8');
  api.use(['ecmascript','templating', 'underscore', 'reactive-var', 'blaze'],
    'client');
  api.use('fourseven:scss@4.10.0');
  api.use('aldeed:autoform@6.3.0');
  api.addFiles([
    'index.js',
  ], 'client');
})
