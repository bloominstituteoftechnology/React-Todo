import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Container from '@material-ui/core/Container';

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
  console.log("Toggling Todo", todoId);
  this.setState({
    todoData: this.state.todoData.map(todo => {
      if (todoId === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    })
  })
}

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todoData: this.state.todoData.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <Container maxWidth="xs">
        <h1>ToDo List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
        todos={this.state.todoData} 
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
      </Container>
    );
  }
}

export default App;
