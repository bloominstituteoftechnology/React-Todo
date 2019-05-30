import React from 'react';

const things = 
[
    {
    task: 'Get Up ON TIME!!',
    id: 14,
    completed: false   
    },
    {
    task: 'Like For Real This Time (Get Up)',
    id: 15,
    completed: false
    },
    {
    task: 'Brush your teeth',
    id: 16,
    completed: false
    },
    {
    task: 'Start Doing Parkour',
    id:340940,
    completed: false
    }
]

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      things
    };
  }

  addTodo = todo => {
    let newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    const sorted = [...this.state.things, newTodo].sort(function(a, b) {
      let taskA = a.task.toUpperCase();
      let taskB = b.task.toUpperCase();

      return taskA > taskB ? 1 : -1;
    });
    this.setState({ things: sorted });
  };
  

  render() {

    if(this.state.things.length < 1) {
      return (
        <div className='App'>
          <div className='header'>
            <h1>What You Need To Do?!</h1>
          </div>
        </div>
      )
    }
  }
}

export default App;
