if (Meteor.isServer) {
  BlazeToReactLayout = require('./server.jsx').default;
} else {
  BlazeToReactLayout = require('./client.jsx').default;
}

// const Component = BlazeToReact('template-name');
export default function BlazeToReact(template) {
  return React.createElement(BlazeToReactLayout, { blazeTemplate: template });
}
