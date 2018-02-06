-### All Answers to Partner Study should be filled out in this file.		


**Singe Page Application**
An application that loads all the required assets and a single HTML page to run the app in it's entirety. Does not need to reload anything in when interacting with it.

**Compilers**
Transforms code into a different format. For example, a compiler can be used to turn javascript written in ES6 syntax and turn it into something compatabile with older browsers. Babel is commonly used to compile React code.

**Bundlers**
Optimizes Javascript and CSS code that is written as seperate modules and turns them into a few files that will run better in a browser. Examples include 'Webpack' and 'Browserify'.

**Elements**
The building blocks of a React app; should not be confused with 'components'. Elements are usually returned from components (i.e they are not used directly). They are what you see on the screen and are immutable. They use HTML-like syntax.

```const element = <h1>Hello, world</h1>;```

**Components**
Reusable pieces of code that return elements to be rendered by the page. They can be used in complex ways by using them within other components and/or returning arrays, strings and numbers. Names should always start with a capital letter.

**JSX**
A syntax extension to Javascript. It looks similar to HTML but it can be used like Javascript.
Instead of the HTML attribute naming conventions, JSX used camelCase. `class` in HTML is also written as `className` since `class` is reserved in Javascript. Javascript expressions can be embedded in JSX by wrapping them in curly braces/

**Package Managers**
Tools that are used to manage install and manage packages. Yarn and NPM are popular ones used with react that both manage node packages.

**CDN**
Stands for Content Delivery Network. It is a network of servers that deliver the cached content to a webpage depending on the users location. It helps improve performance and protect from surges in traffic.

**Props**
Data that is inputted to a React component. They are passed down from a parent component to a child component. They are readonly and should not be modified. The content of a component can be accessed using `props.children`.

**State**
Used by a component to store data that will change over time. To modify state you must use `this.setState()`. Only components defined as classes can have state.
For each piece of changing data there should be only one component that 'owns' it (inside it's state). To share that piece of data with multiple components, look into 'lifting state up' and pass it down to the components as props.