### All Answers to Partner Study should be filled out in this file.

1. Single Page Application
    * A single page applicaiton is simply an app that works inside of a browser and does not require page reloading during use.  SPA's are much easier to implement than Multi-Page Applications (MPA), and are typically very fast to load their own content; however they do have their limitations.  Single Page Applications require JavaScript - without it - they do not run.  There are also substantial limitations related to optimizing your website's visibility for a target audience as well as potential security and memory leak issues.

2. Compilers
    * In React, a compiler (such as Babel) is required to transform the ES6 JavaScript that we write in into readable JavaScript syntax for older browsers.

3. Bundlers
    * In React, we also need Bundlers, like Webpack and Browserify, which take both the JavaScript and CSS code we write as seperate modules, and combine and restructure files to optimize them to be interpretted by browsers.

4. Elements
    *  Elements is rather loosely used term to refer to the various sections rendered to and visible on a React app page.  Elements are 'immutable', that is they cannot be changed once they have been loaded to the page.  Typically in React, elements are returned from components.

5. Components
    * Components are like small packages of code which can be easily added, removed, or duplicated to render specific content onto the page.  Components typically implement ES6 classes, but they can also be written as simple Functional Components, which return only static HTML.

6. JSX
    * JSX is the language used with React to write javascript.  It is looks like a combination of JavaScript and HTML; however, it is JSX, which will then be compiled inside React and returned as plain JavaScript objects.

7. Package Managers
    * Package Managers, like npm and yarn, allow us to manage the 'dependencies', that is the additional files needed for our React app to work, in our project.

8. CDN
    * Content Delivery Networks were designed to solve the problem of latency, the increased amount of time that a page requires to load due to the physical distance between your location at that of the website's hosting server.  To get around this issue, Content Delivery Networks were designed to store a copy (a cache) version of your websites content in multiple geographical locations (called 'points of presence' or PoP).  Thus, when someone in the UK accesses your U.S. website, it is done through a local UK PoP - one of many which make up the Content Delivery Network.

9. Props and State
    *  State is required inside any component where the content changes over time. This includes anything that involves user interaction with the page (clicking, typing, etc. to make a change). In order to for these changes to be made to the initial state, this.setState() must be used.  It is important to remember that state can only be called within components defined as classes. State remains specific to a single component as opposed to props which exist in order to allow data to be passed from parent components to their children.  Other important things to know about props include that they are readonly, and should not be modified (that is what state is for).
