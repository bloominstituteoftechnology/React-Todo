import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
  }

  toggleCompleted = () => {
    let newTodo = [...this.state.todo];
    newTodo = newTodo.map(todo => {
      if(todo === newTodo) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({newTodo});
  }

  handleInput = e => {
      this.setState({
        todo: e.target.value
      });
  }

  addTodo = e => {
    e.preventDefault();
    if (this.state.todo === '') {
      return;
    }
    const task = this.state.todo;
    const newTodo = {task: task, id: Date.now(), completed: false};
    const newarr = [...this.state.todos];
    newarr.push(newTodo);
      this.setState({todos: newarr, todo: ''});
        
  };
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm todo={this.state.todo}
          addTodo={this.addTodo}
          todo={this.state.todo}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
