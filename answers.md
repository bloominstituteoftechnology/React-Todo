### All Answers to Partner Study should be filled out in this file.

1. Single Page Application: 
    Is an application that loads an HTML page with its Javascript and CSS counterparts. Interactions are automatically inputed without a page reload.

2. Compilers:
    A Javascript compiler takes Javascript code, transforms it and returns Javascript code in a different format. Its used to transform ES6 into syntax older browsers are able to interpret. Babel is commonly used with React.

3. Bundlers: 
    take Javascript and CSS code written as seperate modules and combines them together into a few files. Common bundlers in React apps are Webpack and Browserify.

4. Elements: 
    React elements are the building blocks of React applications. An element describes what you want to see on the screen. React elements are fixed. Elements are not used directly but get returned from components.
    Ex. const element = <h1>Hello,world</h1>;

5. Components:
    React components reusable pieces of code that return a React element to be rendered to the page. Simplest version of React component is a plain Javascript function that returns a react element:
    Ex: 
    class Welcome extends React.Component {
    render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

6. JSX:
    JSX is a syntax extension to Javascript. It gets compiled to React.createElement() calls

7. Package Mangers:
    Package managers are tools that allow you to manage your dependencies in your project. Like package.json. npm and Yarn are common package managers used in React.

8. CDN: 
    stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.

9. Props and State:
    props are inputs to a React component. They are read only. If you need to modify a value use state instead.
    A component needs state when some data associated with it changes over time. To change state it must call ths.setState(). Only components defined as classes can have state/
