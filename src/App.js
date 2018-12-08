import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  state = {
    todos: [],
    currentId: 0,
  };

  handleToggleComplete = (taskId) => {
    const { todos } = this.state;
    const todoIndex = todos.findIndex(todo => todo.id === taskId);

    todos[todoIndex].completed = !todos[todoIndex].completed;

    const newTodos = [...todos.slice(0, todoIndex), todos[todoIndex], ...todos.slice(todoIndex + 1)]
    this.setState({ todos: newTodos })
  }

  handleAddTask = (text) => {
    const { todos, currentId } = this.state;
    const newTask = {
      task: text,
      id: currentId,
      completed: false
    };

    this.setState({ todos: [...todos, newTask], currentId: currentId + 1 })
  }

  handleClearCompleted = () => {
    const { todos } = this.state;
    const remainingTodos = todos.filter(todo => todo.completed === false)
    this.setState({ todos: remainingTodos });
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoList todos={todos} onToggleComplete={this.handleToggleComplete} />
        <TodoForm onAddTask={this.handleAddTask} onClearCompleted={this.handleClearCompleted} />
      </div>
    );
  }
}

export default App;