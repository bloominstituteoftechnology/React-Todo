import React from 'react';

const tasks = [
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      id: '',
      completed: ''
    }
  }

  addTask = e => {
    e.preventDefault();
    console.log(e.target);

    const newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      tasks: [...this.state.tasks,newTask],
      task:'',
      id:'',
      completed:''
    });
  };
   handleChanges = e => {
     console.log(e.target.value);
     this.setState({
       [e.target.task]: e.target.value
     });
   };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
