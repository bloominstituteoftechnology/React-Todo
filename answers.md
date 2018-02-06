### All Answers to Partner Study should be filled out in this file.
1. *Single Page Application* is an application that loads only one HTML page with all the required assets and does not require round trip to the server which means that the page isn ot reloaded.
 
2. *Compilers* take Javascript code, transform it and return Javascript in a different format. The most common use case is to transform ES6 syntax into older voersion of Javascript. Babel is ommonly used for Javascript compilation.

3. *Bundlers* take Javascript and CSS code organized as separate modules and combine them into a few files optimized for browsers. Some commonly used bundlers for React applications include Browserify and Webpack.
 
4. *Elements* describe what you want to see on the screen. For example: 
 ```
 const element = <h1>Hello, world</h1>;
 ```
 React elements are immutable, are not used directly, but returned from components.
 5. *Components* are small reusable pieces of code that return a React element to be rendered to the page. For example: 
 ```
 function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
``` 
or in the form of a ES6 class 
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
Components can return other components as well as arrays, strings, and numbers. To identify a candidate for a Component on a page, a Component must be used several times and/or complex enough on its own such as Comment, Button, Navigation Menu, etc. Components should always start with a capital letter. 

6. *JSX* is a syntax extension of Javascript which has full power of the language. JSX gets compiled to React.createElement() calls which return JS objects called React elements.

7. *Package Managers* are tools that manage dependencies in a project. Most commonly used package managers in React applications are npm and Yarn. 

8. *CDN* stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers located around the world. 
9. *Props* are data inputs to a React component. props are readonly. For example:
```
<Welcome>Hello World!</Welcome>
```
The string "Hello World!" is accessed via *props.children* as follows:
```
function Welcome (props) {
    return <p>{props.children}</p>
}
```
or use *this.props.children* as in:
```
class Welcome extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}
```
10. *State* is mutable data unlike props. State is managed by the component itself unlike props that is passed down from a parent to child. To change it's state, the component must call this.setState(). Only components defined as classes can have state.