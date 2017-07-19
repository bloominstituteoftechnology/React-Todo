# React-1 - Todo Project 

### What is React?
- Read this first: [Facebook Docs](https://facebook.github.io/react/docs/hello-world.html)
- Learn about the [React Life Cycle Methods](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

### Battle Plan
 - Objective: At this point you have become familiar with the DOM and have exausted research on the wonderful world of HTML and CSS. Now we're going to dive into modern JavaScript development by learning about ReactJS.
 - You're going to be building a ToDo App (please hold your applause).
 - We know this seems trivial, but the best part about this assignment is that is shows off some of the strengths of react and you can take it as far as want.

  - Tool suggesstions
    - React Dev Tools - * This is a MUST you need to install this asap!
    - For styling we'll be using [Sass](http://sass-lang.com/)
    - We have everything you need for your React Developer environment in this file. We went over this in the lecture video.

#### To Get Started
##### You'll need to make sure you have the following installed.
  - node and npm
  - webpack `npm install -g webpack` to install it globally
  - `npm install` will pull in all the node_modules you need
  - `npm start` will start a development server on your localhost at port 8080.

#### Tips and Tricks
  - Think of your application as an Application Tree. App is the parent, which controlls properties/data needed for the child components. This is how modern applications are built. They're modular, separate pieces of code called components that you 'compose' together to make your app. It's awesome!
  - Be sure to keep your todos in an array on state. Arrays are so awesome to work with.
  - When you need to iterate over a list and return React components out as elements, you'll need to include a "key" property on the element itself. `<ElementBeingRendered key={someValue} />`. Note: this is what react is doing under the hood, it needs to know how to access each element and they need to be unique so the React engine can do its thing. 
  - Feel free to structure your "todo" data however you'd like. i.e. strings, objects etc. 
  - React will give you warnings in the console that urge you to squash React Anti-Patterns. But if something is completely off. You'll get stack trace errors that will force your bundle to freeze up. You can look for these in the Chrome Console, or in the terminal where you're running your webpack-dev-server.

