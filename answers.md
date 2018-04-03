### All Answers to Partner Study should be filled out in this file.

1. Single Page Application

A single page application, is a application in which a round trip to the server and back isn't needed when interacting with the application.  A single page or load is all that is required to run the application.

2. Compilers

A JavaScript compiler takes JavaScript code and transforms it into a different format.  For instance when we write ES6, it is transformed into vanilla javascript so all browsers can read and interpret it.

3. Bundlers

A bundler takes many different javascript, css, html files and bundles them into as few as files as possible.  This increases load times and efficiency.  In React Webpack and Browserify are the two most popular.

4. Elements

React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen.

5. Components

React components are small, reusable pieces of code that return a React element to be rendered to the page.

6. JSX

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”.

7. Package Mangers

Package managers are tools that allow you to manage dependencies in your project. npm and Yarn are two package managers commonly used in React applications. Both of them are clients for the same npm package registry.

8. CDN

CDN stands for Content Delivery Network. CDNs deliver cached, static content from a network of servers across the globe.

9. Props and State

Props are inputs to a React component. They are data passed down from a parent component to a child component.  Props are readonly.

A component needs state when some data associated with it changes over time. For example, a Checkbox component might need isChecked in its state, and a NewsFeed component might want to keep track of fetchedPosts in its state.

The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself. A component cannot change its props, but it can change its state. To do so, it must call this.setState(). Only components defined as classes can have state.

For each particular piece of changing data, there should be just one component that “owns” it in its state. Don’t try to synchronize states of two different components. Instead, lift it up to their closest shared ancestor, and pass it down as props to both of them.