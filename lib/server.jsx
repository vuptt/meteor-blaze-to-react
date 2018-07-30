import React, { Component } from 'react';

// Blaze templates are not loaded server-side, we cannot do server-rendering
// We make sure the render is the same as on the client initially
export default class BlazeToReactLayout extends Component {
  render() {
    return (<span />);
  }
}
