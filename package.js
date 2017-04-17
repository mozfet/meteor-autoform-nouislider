Package.describe({
  name: 'mozfet:autoform-materialize-nouislider',
  summary: 'Dual value slider for autoform.',
  version: '1.0.2',
  git: 'https://github.com/mozfet/meteor-autoform-nouislider'
});

Npm.depends({
  'simpl-schema': '0.2.3',
  'nouislider': '9.2.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use(['templating@1.3.2', 'underscore@1.0.10', 'reactive-var@1.0.11', 'blaze@2.3.2'], 'client');
  api.use('ecmascript@0.6.3');
  api.use('aldeed:template-extension@4.1.0');
  api.use('aldeed:autoform@6.0.0');
  api.addFiles([
    'index.js',
  ], 'client');
});
