# React-Todo

### Other Useful Resources

* [API Documentation](https://reactjs.org/docs/react-api.html)
* [Documentation](https://facebook.github.io/react/docs/jsx-in-depth.html) on JSX

### Battle Plan

* Objective: At this point you have become familiar with the DOM and have built out User Interfaces HTML and CSS and some custom components. And you've even had some practice working with React at a basic level. Now we're going to dive into modern front-end JavaScript development by learning about ReactJS.
* You're going to be building a ToDo App (please hold your applause).
* We know this may seem trivial, but the best part about this assignment is that is shows off some of the strengths of React and you can also take it as far as want so don't hold back on being creative.

* Tool requirements
  * [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) - _This is a MUST_ you need to install this asap!
  * We have everything you need for your React Developer environment in this file. We went over this in the lecture video.

#### To Get Started

##### You'll need to make sure you have the following installed.

* `yarn install OR npm install` will pull in all the node_modules you need once you `cd` into the root directory of the project
* `yarn start OR npm start` will start a development server on your localhost at port 3000.

#### How to Tackle this Project

* Your job is to write the components to complete the Todo List application and getting as many of the tests to pass as you can. The tests are expecting that you have a TodoList component that renders a Todo component for each todo item.
* The requirements for your Todo List app is that it should have an `input field` that a user can type text into and submit data in the input field in order to create a new todo item.
* Aside from being able to add todos, you should be able to mark any todo in the list as 'complete'. In other words, a user should be able to click on any of the todos in the list and have a strikethrough go through the individual todo. This behavior should be toggle-able, i.e. a todo item that has a strike-through through it should still be clickable in order to allow completed items to no longer be marked as 'completed'. Once you've finished your components, you'll need to have the root `App` component render your TodoList component.

#### Tips to Keep in Mind

* All components you implement should go in the `src/components` directory.
* The components that you'll need should be named, `TodoList.js` and `Todo.js` (as those are the files being imported into the tests).
* Think of your application as an Application Tree. App is the parent, which controls properties/data needed for the child components. This is how modern applications are built. They're modular, separate pieces of code called components that you 'compose' together to make your app. It's awesome!
* Be sure to keep your todos in an array on state. Arrays are so awesome to work with.
* When you need to iterate over a list and return React components out as elements, you'll need to include a "key" property on the element itself. `<ElementBeingRendered key={someValue} />`. Note: this is what react is doing under the hood, it needs to know how to access each element and they need to be unique so the React engine can do its thing. An example snippet that showcases this may look something like this:

```js
this.state.todos.map((todo, i) => <AnotherComponent key={i} todo={todo} />);
```

Here, we're simply passing the index of each todo item as the key for the individual React component.

* Remember your todo data should be an array of objects that look a lot like this:

```js
[
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];
```

* React will give you warnings in the console that urge you to squash React Anti-Patterns. But if something is completely off, you'll get stack trace errors that will force your bundle to freeze up. You can look for these in the Chrome console.

#### Stretch Problems

* Add the ability to remove any todos that you have completed. `.filter` will be your best friend here. You can have a `remove completed` button that fires a filtering function that will filter out an todos that have a completed of `true`.
* Take your App's styles to the next level. Start implementing as much creativity here as you'd like. You can build out your styles on a component-by-component basis eg `App.js` has a file next to it in the directory tree called `App.scss` and you define all your styles in that file. Be sure to @import these styles into the `index.scss` file.
* Persist your data in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.
