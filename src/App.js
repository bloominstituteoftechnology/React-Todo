import React from 'react';
// import ReactDOM from 'react-dom'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


// ARRAY OF TASKS TODO
const todo = [
  {
    task: 'Organize Garage',
    id: 123,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Wash the car',
    id: 1234,
    completed: false
  },
  {
    task: 'Buy a birthday gift',
    id: 12345,
    completed: false
  },
  {
    task: 'Eat a whole watermelon',
    id: 123456,
    completed: false
  },
  {
    task: 'water the fake plant',
    id: 123454,
    completed: false
  }
];

// APP COMPONENT
class App extends React.Component {

  constructor() {
    super();
      this.state = {
        task: todo
    };
  };

  

  toggleTask = clickedId => {
    const newTaskList = this.state.task.map(item => {
      if(item.id === clickedId) {
        return {...item,
        completed: !item.completed
      };
      }else{
        return item;
      }
    })
    this.setState({
      task: newTaskList
    })
    };
    // this.setState({
    //   task: this.state.task.map(item => {
    //     if (item.id === clickedId) {
    //       return {
    //         ...item,
    //         completed: !item.completed
    //       };
    //     }else {
    //       return item;
    //     }
    //   })
    // });
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

// ADD A NEW TASK TO LIST
  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      task: [...this.state.task, newTask]
  })
  };

  render() {

    return (
      <div className="App">

        <div className="header">
          <h2>Nates AWESOME Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>

        <TodoList 
        toggleTask={this.toggleTask}
        todo={this.state.task}
        />

      </div>
    );
  }
}

export default App;
