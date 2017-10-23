### All Answers to Partner Study should be filled out in this file.
 * 1. Single Page Application - a website composed in one page. Angular is frequently used for this. It's a responsive design that updates based on user input without interacting with the server.

* 2. Compilers - programs that take source code (code written by humans) and converts it into another language, normally a lower level language such as machine language. Babel is a compiler for JavaScript ES6, producing code that older browsers can interpret.

* 3. Bundlers - A system that combines many code modules into a few files that are better optimized for browsers. Webpack is an example of a bundler.

* 4. Elements - The building blocks of React applications, elements describe what should be displayed on the page. Elements are immutable (not able to be mutated).

* 5. Components - Small, reusable pieces of code that return a React element for rendering to the page. They have distinct functions and are used with other components. They can return other components, arrays, strings, and numbers. A good test ofr whether something should be a component is whether it is reused several times, such as a button, or if it is complex enough on its own. Component names start with a capital letter.

* 6. JSX - A hybrid of JavaScript and HTML allowing both to be written in the same file. It is a syntax extensoin to JavaScript that makes it like a template languge but with all of JS's power. JSX compiles into React.createElement() calls that return plain JS objects called React elements. The camelCase naming convention is used in JSX.

* 7. Package Managers - Tools like npm that allow us to manage project dependencies.

* 8. CDN - Content Delivery Network - Delivers cached, static content from a network of servers around the world.

* 9. Props - Properties. Data passed from a parent component to a child component. Should be treated as read only and not modified at all. Use state to modify a value in response to user input.

* 10. State - The memory of the React framework, needed when data associated with a component changes over time. While props are passed from a parent component, state is managed directly by the component. The component can change its state but not its props. Only components defined as classes can have state. Only one component should own any piece of changing data. If it must be shared it should be lifted up to a common ancestor and then passed down to both components.