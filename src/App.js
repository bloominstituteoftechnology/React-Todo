import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      todo: '',
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmitTodo = e => {
    if (this.state.todo.match(/\S/)) {
      const newTodoList = this.state.todoList.slice();
      newTodoList.push({ task: this.state.todo, id: Date.now(), completed: false });
      this.setState({ todoList: newTodoList });
    }
    this.setState({ todo: '' });
    e.preventDefault();
  }

  handleToggleComplete = id => {
    let newTodoList = this.state.todoList.slice();
    newTodoList = newTodoList.map(todo => {
      if (todo.id === id) {
        return {
          task: todo.task,
          id: todo.id,
          completed: !todo.completed,
        }
      }
      return todo;
    });
    this.setState({ todoList: newTodoList });
  }

  handleClearCompleted = e => {
    let newTodoList = this.state.todoList.slice();
    newTodoList = newTodoList.reduce((incomplete, todo) => {
      if (!todo.completed) {
        incomplete.push(todo);
      }
      return incomplete;
    }, []);
    this.setState({ todoList: newTodoList });
    e.preventDefault();
  }

  handleMouseDown = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <TodoList
          todoList={this.state.todoList}
          onToggleComplete={this.handleToggleComplete}
          onMouseDown={this.handleMouseDown} />
        <TodoForm
          todo={this.state.todo}
          onChange={this.handleChange}
          onSubmitTodo={this.handleSubmitTodo}
          onClearCompleted={this.handleClearCompleted} />
      </div>
    );
  }
}

export default App;
