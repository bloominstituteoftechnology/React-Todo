import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {

  // Here we would set up a constructor and add our state. We want to assign our key chores to the value array variable called data.
  constructor() {
    super();
    this.state = {
      todos: [
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
      ],
      todo: ''
    };
  }

  // Here is a handler function addItem that will create a newItem to add to data. It will have a task, which will be itemName, an id, which will be Date.now(), and completed, which should default to false.
  addItem = e => {
    e.preventDefault();
    const newItem = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newItem],
      todo: ''
    });
  };

  changeTask = event => this.setState({[event.target.name]: event.target.value});

  // Here is a handler function toggleTasks that will toggle whether a task is completed or not.
  toggleTasks = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  // Handler function that will be attached to a button, that twhen on click, will clear purchases.
  clearPurchase = event => {
    event.preventDefault()
    let todos = this.state.todos.filter(todo => !todo.completed);

    this.setState({todos});
  };

  render() {
    return (
      <div className='mainbody'>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList handleToggleTasks={this.toggleTasks} todos={this.state.todos} />
          <TodoForm value={this.state.todo} handleChangeTask={this.changeTask} handleAddItem={this.addItem} handleClearPurchase={this.clearPurchase} />
        </div>
      </div>
    );
  }
}

export default App;
