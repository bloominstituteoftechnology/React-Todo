### All Answers to Partner Study should be filled out in this file.
 1. Describe the following, Single Page Application, Compilers, Bundlers, Elements, Components, JSX, Package Mangers, CDN, Props and State.

 Answer: Single Page Application is an application that loads a single HTML page and all the necessary assets such as JavaScript and CSS required for the application to run. Any interaction with the page or subsequent pages do not require a round trip to the server that means the page is not reloaded.

 Compiler is the machine that takes the code, transforms it and returns the code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. Babel is the compiler most commonly used with React.

 Bundlers take JavaScript and CSS code written as separate modules and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include Webpack and Browserify.

 React elements are the building blocks of React applications. An element describes what you want to see on the screen. React elements are immutable. Typically, elements are not used directly, but get returned from components.

 Components are small, reusable pieces of code that return a React element to be rendered to the page. Components can be broken down into distinct pieces of functionality and used within other components. A good rule of thumb is that if a part of your UI is used several times or is complex enough on its own, it is a good candidate to be a reusable components. Component names should always start with a capital letter.

 JSX is a syntax extention to JavaScript. It is similar to a template language, but it has full power of JavaScript. 

 Package Managers are tools that allow you to manage dependencies in your project. npm and yarn are two package managers commonly used in React applications.

 CDN stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe. 

 Props are inputs to a React component. They are data passed down from a parent component to a child component. Props are readonly.

 A component needs state when some data associated with it changes over time. State is managed by the component itself. A component can change its state. To do so, it must call this.setState(). Only components defined as classes can have state. 