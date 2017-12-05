### All Answers to Partner Study should be filled out in this file.
 * 1. * Describe the following, Single Page Application, Compilers, Bundlers, Elements, Components, JSX, Package Mangers, CDN, Props and State. 
 
 ASingle-page Application
A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.
Though you may build a single-page application in React, it is not a requirement. React can also be used for enhancing small parts of existing websites with additional interactivity. Code written in React can coexist peacefully with markup rendered on the server by something like PHP, or with other client-side libraries. In fact, this is exactly how React is being used at Facebook.

Compilers
A JavaScript compiler takes JavaScript code, transforms it and returns JavaScript code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. Babel is the compiler most commonly used with React.

Bundlers
Bundlers take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include Webpack and Browserify.

Elements
React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable.
const element = <h1>Hello, world</h1>;
Typically, elements are not used directly, but get returned from components.

React components are small, resuable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
Components can also be ES6 classes:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
Components can be broken down into distinct pieces of functionality and used within other components. Components can return other components, arrays, strings and numbers. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component. Component names should also always start with a capital letter (<Wrapper/> not <wrapper/>). See this documentation for more information on rendering components.

Most React implementations make use of JSX, which allows you to put XML-like syntax right within JavaScript. Since React displays output as it’s main function, we will be using HTML in just about every component. JSX simplifies the code that would normally have to be written in JavaScript, which makes your code much more readable and simplified.

JSX is not required, but consider the difference between two very simple statements. The following statement is created without JSX:


1
var element = React.createElement('div', { className: 'whatever' }, 'Some text');
The following is with JSX:


1
2
3
var element = <div className="whatever">
   Some text
</div>
As you can see, the JSX code is much easier to read. Now that we have a basic understanding of what our output syntax will look like, let’s dig in and learn the building blocks of React.



props are inputs to a React component. They are data passed down from a parent component to a child component.
Remember that props are readonly. They should not be modified in any way:
// Wrong!
props.number = 42;
If you need to modify some value in response to user input or a network response, use state instead.

State-- state
A component needs state when some data associated with it changes over time. For example, a Checkbox component might need isChecked in its state, and a NewsFeed component might want to keep track of fetchedPosts in its state.
The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself. A component cannot change its props, but it can change its state. To do so, it must call this.setState(). Only components defined as classes can have state.
For each particular piece of changing data, there should be just one component that “owns” it in its state. Don’t try to synchronize states of two different components. Instead, lift it up to their closest shared ancestor, and pass it down as props to both of them.

  Package Management
CDN-hosted React
We provide CDN-hosted versions of React on our download page. These pre-built files use the UMD module format. Dropping them in with a simple <script> tag will inject the React and ReactDOM globals into your environment. It should also work out-of-the-box in CommonJS and AMD environments.

Using React from npm
You can use React with a CommonJS module system like browserify or webpack. Use the react and react-dom npm packages.

// main.js
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
Configure babel with a .babelrc file:

 { "presets": ["react"] }
Note:
If you are using ES2015, you will want to also use the babel-preset-es2015 package.
To install React DOM and build your bundle with browserify:

$ npm install --save react react-dom babelify babel-preset-react
$ browserify -t [ babelify ] main.js -o bundle.js
To install React DOM and build your bundle with webpack:

$ npm install --save react react-dom babel-preset-react babel-loader babel-core
$ webpack main.js bundle.js --module-bind 'js=babel-loader'
Note:
If you are using ES2015, you will want to also use the babel-preset-es2015 package.
Note: by default, React will be in development mode, which is slower, and not advised for production. To use React in production mode, set the environment variable NODE_ENV to production (using envify or webpack's DefinePlugin). For example:

new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});
Update your HTML file as below:

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="build/react.js"></script>
    <script src="build/react-dom.js"></script>
    <!-- No need for Babel! -->
  </head>
  <body>
    <div id="example"></div>
    <script src="build/helloworld.js"></script>
  </body>
</html>

