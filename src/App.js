import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";

const tasks = [
  {
    task: "Fix ceiling light",
    id: 1,
    completed: false
  },
  {
    task: "Eat homemade tamales",
    id: 2,
    completed: false
  },
  {
    task: "Play videogames with friends",
    id: 3,
    completed: false
  },
];

export default class App extends React.Component {
  render() {
    return (
      <TodoList/>
    );
  }
}
