import BlazeToReact from './lib/lib.js';

if (Meteor.isServer) {
  BlazeToReactLayout = require('./lib/server.jsx').default;
} else {
  BlazeToReactLayout = require('./lib/client.jsx').default;
}

export { BlazeToReactLayout, BlazeToReact };
