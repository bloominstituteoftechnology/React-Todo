# React-Todo

We're going to practice building a stateful class component with this project. Even though hooks are gaining popularity among react developers, class components are going to be around for a long time. It's imperative that you get use to class components, and feel comfortable working with class components since you'll most likely need to work with them if you are hired to work on a React app.

## Introduction

- Your job is to write the components to complete the Todo List application.
- Your todo list should be fully functional and you should design it however you'd like. Feel free to get creative here. I have supplied a gif for you to see what the MVP functionality is.

![Todo App MVP](todo.gif)

- Your todo data should be an array of objects that look a lot like this:

```js
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
```

- The `task` field is the todo title that will be shown to the user.
- The `completed` field should default to `false` and will be the field that we toggle when we complete a todo.
- The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.

## Instructions

### Task 1: Project Set Up

- [x] Create a forked copy of this project.
- [x] Clone your OWN version of the repository in your terminal
- [x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into main (student's Repository). **Please don't merge your own pull request**
- [x] From the home page of your repo, make sure you have your branch selected
- [x] Copy the URL and paste it into Canvas

### Task 2: MVP

- **Don't focus on styling yet**. We want you to worry about function over form today.
- Your todo list should display a list of todos, an input field, a submit button, and a clear all button.
- Be sure to use the given files for building out these components.
- `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  - All of your application data will be stored here on `<App />`.
  - All of your `handler` functions should live here on `<App />`.
- `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
  - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
  - Once a todo is submitted, the Todo List should re-render and show the added todo.

---

- Add the functionality to toggle your todo's completed flag from `false` to `true`.
  - Once a todo is completed, be sure to demonstrate to the user that the todo is completed by adding a line-through style property if the completed flag is true.
- Add the ability to remove any todos that you have completed. `.filter` will be your best friend here. When a user clicks on the `Clear Completed` button call your handler function that will filter out any todos that have the completed flag toggled to `true`.
- **Now is the time to style** Take your time to make this an app that you can be proud of.

### Task 3: Stretch Problems

- **Persist your data** in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.

- **Search Functionality** Add a input bar that allows you to search through your tasks and only show the ones that match the search input.

- **Hosting** Create a [Netlify Account](https://www.netlify.com/) and follow the tutorial on how to host your shiny new todo app on the world wide web.

## Submission Format

- [x] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
- [x] From the home page of your repo, make sure you have your branch selected
- [x] Copy the URL and paste it into Canvas to submit your assignment
