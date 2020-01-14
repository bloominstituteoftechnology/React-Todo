import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      todo: [
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
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>My Todo List</h2>

        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
