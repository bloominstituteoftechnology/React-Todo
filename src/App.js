import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoData
    };
  };

  //change handlers
addTodo = (todoTask) => {
  const newTodo = {
    task: todoTask,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todoData: [...this.state.todoData, newTodo]
  });
};

toggleItem = todoId => {
  console.log("Toggling Todo", todoId)
}

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todoData} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
