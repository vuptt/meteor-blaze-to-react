# BlazeToReact
Transform a Blaze template into a React.js component while keeping the reactivity

## Usage
```javascript
const Component = BlazeToReact('template-name');
```

```javascript
const Component = BlazeToReact('template-name', {
  container: <div className="my-container" />
});
```

## Example for any package (accounts-ui) 1
```javascript
const LoginButtons = BlazeToReact('loginButtons');

App = React.createClass({
  render() {
    return (
      <div>
        {/* ... */}
        <LoginButtons />
      </div>
    );
  }
})
```

## Example for any package (accounts-ui) 2
```javascript
const LoginButtons = BlazeToReact('loginButtons');

App = React.createClass({
  render() {
    return (
      <div>
        {/* ... */}
        <BlazeToReactLayout blazeTemplate="loginButtons" />
      </div>
    );
  }
})
```

## Example with your own template
```html
<template name="hello">
  This is whatever template: {{message}}
  Blaze keeps being reactive from React values: {{count}}
</template>
```

```javascript
const Hello = BlazeToReact('hello');

App = React.createClass({
  getInitialState() {
    return {
      count: 0
    };
  },

  componentDidMount() {
    var self = this;

    this.interval = setInterval(function() {
      self.setState({ count: this.state.count + 1 });
    }, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render() {
    return <Hello message="hi from react" count={this.state.count} />;
  }
})
```
