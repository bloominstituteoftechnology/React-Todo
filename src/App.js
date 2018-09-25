import React from 'react';


const todoList = [
  {
    task: 'Fork & Clone',
    id: Date.now(),
    isCompleted: false
  },
  {
    task: 'Submit Pull Request',
    id: Date.now(),
    isCompleted: false
  },
  {
    task: 'Create functionality',
    id: Date.now(),
    isCompleted: false
  },
  {
    task: 'Add styling',
    id: Date.now(),
    isCompleted: false
  }
]




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {

    }
  }

  //display list of todos
  //display input field
  //display submit button
  //display clear all button
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>List starts here:</h3>
        {todoList.map((element) => {
          return (
            <div>
              {element.task}
            </div>
          )
        })}
        <input placeholder="Add Tasks Here" /> <button> Submit </button> <button> Clear All </button>
      </div>
    );
  }
}

export default App;
