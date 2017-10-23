# React I - `The Good Ol'` Todo Project 

## Partner Study
#### Answers to the following partner-study can be found [here](https://reactjs.org/docs/glossary.html)
  * Describe the following, Single Page Application, Compilers, Bundlers, Elements, Components, JSX, Package Mangers, CDN, Props and State. 
  * Write all answers in answers.md

### Other Useful Resources
* [CodeSandbox](https://codesandbox.io/s/z667kplonx) that was used in the lecture video: 
* [API Documentation](https://reactjs.org/docs/react-api.html)
* [Documentation](https://facebook.github.io/react/docs/jsx-in-depth.html) on JSX

### Battle Plan
 * Objective: At this point you have become familiar with the DOM and have exausted research on the wonderful world of HTML and CSS. Now we're going to dive into modern JavaScript development by learning about ReactJS.
 * You're going to be building a ToDo App (please hold your applause).
 * We know this seems trivial, but the best part about this assignment is that is shows off some of the strengths of react and you can take it as far as want.

  * Tool suggesstions
    * React Dev Tools - *This is a MUST* you need to install this asap!
    * We have everything you need for your React Developer environment in this file. We went over this in the lecture video.

#### To Get Started
##### You'll need to make sure you have the following installed.
  * node and npm
  * webpack `npm install -g webpack` to install it globally
  * `npm install` will pull in all the node_modules you need
  * `npm start` will start a development server on your localhost at port 8080.
  * open up new terminal and run `npm run lint` do this often so you can make sure your app is up to date with linting errors.

#### Tips and Tricks
  * *onChange Example:*
  ```
    handleChange(event) {
      this.setState({todo: event.target.value});
    }
  ```
  * Think of your application as an Application Tree. App is the parent, which controlls properties/data needed for the child components. This is how modern applications are built. They're modular, separate pieces of code called components that you 'compose' together to make your app. It's awesome!
  * Be sure to keep your todos in an array on state. Arrays are so awesome to work with.
  * When you need to iterate over a list and return React components out as elements, you'll need to include a "key" property on the element itself. `<ElementBeingRendered key={someValue} />`. Note: this is what react is doing under the hood, it needs to know how to access each element and they need to be unique so the React engine can do its thing. 
  * Feel free to structure your "todo" data however you'd like. i.e. strings, objects etc. 
  * React will give you warnings in the console that urge you to squash React Anti-Patterns. But if something is completely off. You'll get stack trace errors that will force your bundle to freeze up. You can look for these in the Chrome Console, or in the terminal where you're running your webpack-dev-server.

#### Extra Credit
  * Refactor your "Todo" data to ensure it's in object format. `todo: {'text': 'Shop for food, 'completed': false}` and when a user clicks on a todo, switch that completed flag to true. If `completed === true` add some styles to indicate that the todo has been finished. 
  * Take your App's styles to the next level. Start implementing as much creativity here as you'd like. You can build out your styles on a component-by-component basis eg `App.js` has a file next to it in the directory tree called `App.scss` and you define all your styles in that file. Be sure to @import these styles into the `index.scss` file. 
  * Persist your data in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist passed the page refresh. 
