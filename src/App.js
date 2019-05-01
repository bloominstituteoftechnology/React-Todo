import React from 'react';

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      app: todo,
      task: "",
      id: "",
      completed: "",
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.task]: e.target.value
    });
  };

  addStudent = e => {
    e.preventDefault();
    this.setState({
      app: [
        ...this.state.app,
        {
          task: this.state.task,
          id: this.state.id,
          completed: this.state.completed,
        }
      ],
      task: "",
      id: "",
      completed: "",
    });
  };


  render() {
    return (
      <div>
        {this.state.task}
      </div>
    );
  }
}

export default App;
