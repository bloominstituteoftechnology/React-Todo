import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
      task: ""
    }
  }

  addNewTask = event => {
    console.log("clicked");
    event.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  todoChange = event => {
    this.setState({task: event.target.value});
  }

  clearTask = event => {
    event.preventDefault();
    let clearTask = "clear task stuff";
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
        addNewTask={this.addNewTask}
        task={this.state.task}
        todoChange={this.todoChange}
        />
      </div>
    );
  }
}

export default App;
