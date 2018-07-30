Package.describe({
  name: 'blaze-to-react',
  version: '0.0.1',
  summary: 'A simple package to convert blaze to react',
  git: 'https://github.com/ptuanvu/meteor-blaze-to-react.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.3');
  api.use('ecmascript');
  api.use(['jsx@0.2.4']);
  api.use(['blaze@2.1.0'], 'client');
  api.mainModule('blaze-to-react.js');
});
