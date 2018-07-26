import React from "react";

// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const arrayOfTasks = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: arrayOfTasks,
      todo: ""
    };
  }

  handleUpdateState = (event) => {
    event.preventDefault();
    const todoData = this.state.todoData.slice();
    // clone our state todoData array.
    todoData.push({
      task: this.state.todo,
      id: Date.now(),
      completed: false
    });
    this.setState({ todoData, todo: '' });
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ [event.target.name]: event.target.value });
  };

  handleInputEnter = event => {
    event.preventDefault();
    // if keys is equal to 13 (enter) update value
    if (event.keyCode === 13) {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  // toggle completed todos
  toggleCompletedTasks = id => {
    // set state to array
    let todoData = this.state.todoData.slice();
    todoData = todoData.map(task => {
      // basically, if you click and id equals id, which
      // it always does, toggle task completed into false version
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      }
      else {
        return task;
      }
    })
    this.setState({todoData})
  }

  clearCompletedTasks = event => {
    event.preventDefault();
    let todoData = this.state.todoData.slice();
    todoData = todoData.filter(task => !task.completed);
    this.setState({ todoData })
  }
  render() {
    return (
      <div>
        <TodoList 
          handleToggleComplete={this.toggleCompletedTasks}
          todoArray={this.state.todoData} 
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.handleInputChange}
          handleAddTodo={this.handleUpdateState}
          handleClearTodos={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
