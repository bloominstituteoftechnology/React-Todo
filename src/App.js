import React from 'react';
import ReactDom from "react-dom";

<<<<<<< HEAD
const data = 
[
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
];

=======
import TodoList from "./components/TodoComponents/TodoList";
const todoData = [
    {
        task: "Go to Gym",
        id: Date.now(),
        completed: false
    },
    {
        task: "Do Laundry",
        id: Date.now(),
        completed: false
    },
    {
        task: "Prepare Dinner",
        id: Date.now(),
        completed: false
    },
    {
        task: "Code",
        id: Date.now(),
        completed: false
    }
];
>>>>>>> 26edddefdf4bff159cb1e2f8ffadf5931f67717f
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      todo: data
    }
  }

  addTodo = item => {
    const newTodo ={
      name: item,
      id: Date.now(),
      purchase: false
    };
    this.setState({
      todo: [...this.state.data, newTodo]
    });

  

  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
        </div>
=======
      task: todoData,
    };
  }

  toggleList = id => {
    console.log(id);

    this.setState({
      task: this.state.task.map(activity => {
        if (activity.id === id) {
          return {
            ...activity,
            completed: !activity.completed
          };
        } else {
            return activity;
          }
        })
    });
  };


  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  };

  clearList = () => {
    this.setState({
      task: this.state.task.filter(activity => !activity.completed)
    });
  }

  render() {
    return (
      <div className= "App">
        <div className= "header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList
          task={this.state.task}
          toggleList={this.toggleList}
        />
>>>>>>> 26edddefdf4bff159cb1e2f8ffadf5931f67717f
      </div>
    );
  }
}

export default App;
