### All Answers to Partner Study should be filled out in this file.

1. Single Page Application
* A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.

* Though you may build a single-page application in React, it is not a requirement. React can also be used for enhancing small parts of existing websites with additional interactivity. Code written in React can coexist peacefully with markup rendered on the server by something like PHP, or with other client-side libraries. In fact, this is exactly how React is being used at Facebook.

2. Compilers

* A JavaScript compiler takes JavaScript code, transforms it and returns JavaScript code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. Babel is the compiler most commonly used with React.

3. Bundlers

* Bundlers take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include Webpack and Browserify.

4. Elements

* React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable.

const element = <h1>Hello, world</h1>;
Typically, elements are not used directly, but get returned from components.

5. Components

* React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element:

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

6. JSX

* JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. To get a basic introduction to JSX see the docs here and find a more in-depth tutorial on JSX here.

React DOM uses camelCase property naming convention instead of HTML attribute names. For example, tabindex becomes tabIndex in JSX. The attribute class is also written as className since class is a reserved word in JavaScript:

7. Package Mangers

* Package managers are tools that allow you to manage dependencies in your project. npm and Yarn are two package managers commonly used in React applications. Both of them are clients for the same npm package registry.

8. CDN

* CDN stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.

9. Props and State

* Props - props are inputs to a React component. They are data passed down from a parent component to a child component.

Remember that props are readonly. They should not be modified in any way:  If you need to modify some value in response to user input or a network response, use state instead.

* State - A component needs state when some data associated with it changes over time. For example, a Checkbox component might need isChecked in its state, and a NewsFeed component might want to keep track of fetchedPosts in its state.

The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself. A component cannot change its props, but it can change its state. To do so, it must call this.setState(). Only components defined as classes can have state.

For each particular piece of changing data, there should be just one component that “owns” it in its state. Don’t try to synchronize states of two different components. Instead, lift it up to their closest shared ancestor, and pass it down as props to both of them.
