# React-Todo

- At this point you have become familiar with the DOM and have built out User Interfaces HTML and CSS and some custom components. And you've even had some practice working with React at a basic level. Now we're going to start adding some functionality to that work-flow. It's one thing to be able to build UI components using react, but what about the interactivity of those components?

## Initializing the project.

- _Fork and clone_ this project and cd into your cloned version.
- `yarn install` will pull in all the node_modules you need.
- `yarn start` will start a development server on your `http://localhost:3000`.
  - If yarn asks you to select different port with some error message, just select `Y` and it will pull it up on port 3001. This simply means you have a development server up and running on that port already.

## Instructions

- Your job is to write the components to complete the Todo List application.
- Your todo list should be fully functional and you should design it however you'd like. Feel free to get creative here. I have supplied a gif for you to see what the MVP functionality is required to look like over the course of the two days.

### [**INSERT GIF OF COMPLETED TODO**]

#### Day 1 MVP Requirements

- Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
- Your input field should take in user input, and you then should be able to press `Enter` or click on the `Submit Button` to add a todo to your list.
- Aside from being able to add todos, you should be able to mark any todo in the list as 'complete'.
  - In other words, a user should be able to click on any of the todos in the list and have a strikethrough go through the individual todo.
  - This behavior should be toggle-able, i.e. a todo item that has a strike-through through it should still be clickable in order to allow completed items to no longer be marked as 'completed'.
- The
- Once you've finished your components, you'll need to have the root `App` component render your TodoList component.

```js
this.state.todos.map((todo, i) => <AnotherComponent key={i} todo={todo} />);
```

Here, we're simply passing the index of each todo item as the key for the individual React component.

- Remember your todo data should be an array of objects that look a lot like this:

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

#### Day 2 MVP Requirements

#### Stretch Problems

- Add the ability to remove any todos that you have completed. `.filter` will be your best friend here. You can have a `remove completed` button that fires a filtering function that will filter out an todos that have a completed of `true`.

- Persist your data in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.
