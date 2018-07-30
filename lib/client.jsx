import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Blaze } from 'meteor/blaze';

export default class BlazeToReactLayout extends Component {
  componentWillReceiveProps(nextProps) {
    // Ensure a re-rendering of the template if a prop changes
    this.renderBlaze();
  }

  renderBlaze() {
    this.removeBlaze();
    this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), ReactDOM.findDOMNode(this.refs[this.props.blazeTemplate]));
  }

  removeBlaze() {
    if (this.view) Blaze.remove(this.view);
  }

  componentDidUpdate() {
    // Needed when used with a conditional show, like {condition ? <BlazeToCreact ../> : null}
    this.renderBlaze();
  }

  componentDidMount() {
    this.renderBlaze();
  }

  render() {
    return (<div ref={this.props.blazeTemplate}/>);
  }

}
