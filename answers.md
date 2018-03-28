### All Answers to Partner Study should be filled out in this file.

1. Single Page Application
  An application that loads a single HTML page with everything required to run it (CSS, JavaScript, etc.). 
  The benefit to the user is that he/she can interact with the page without the need to make a round trip to 
  the server--less need to reload the page.

2. Compilers
   In CS the word compiler can mean many things but in this case a JavaScript compiler--such as Babel--takes
   JavaScript code of one type and turns it into JavaScript code of another type. The most common use for this
   is to transform newer JavaScript into JavaScript of an older syntax that an older browser can understand.

3. Bundlers
  Bundlers take a bunch of JavaScript and CSS code written as separate files and bundles them into fewer files
  so they work better with browsers. Two great examples of bundlers are Webpack and Browserify.

4. Elements
  The building blocks of all React applications. Should not be confused with React components. An element 
  describes what you want to see on the screen. React elements are immutable. Elements are normally not used directly, but are instead returned from React components.

5. Components
  React components are little reusable pieces of code that return a React element to be rendered to the page.
  I have learned about two types of components thus far in my journey in Lambda School; functional components
  and class components. A functional component is just a little function that returns some element. A class 
  component also returns an element but in addition has access to a property called `state`. We can do lots of
  really cool things with state, which I'm still learning about...

  
6. JSX
  A syntax extension to JavaScript with the full power of JavaScript. JSX is ultimately compiled to 
  `React.createElement()` which returns JavaScript objects called React elements.

7. Package Managers
   Tools that help developers more easily manage software dependencies.

8. CDN
   Content Delivery Network; cached content delivered from a global network of servers. Bootstrap is one great
   example of a CDN.

9. Props and State
   Props are inputs to a React component; they are data passed down from a parent component to a child 
   component.Props are read only and should never be modified. State is used when some property should change
   based on user input. `setState()` is used to change the state.