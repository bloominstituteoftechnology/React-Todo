import React from 'react';

const tasks = [
  {
    id: 1,
    task: 'cry',
    completed: false
  },
  {
    id: 2,
    task: 'scream',
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      tasks: tasks
    }
  }

  handleInputChange = event => {
    this.setState({task: event.target.value})
  }


  handleAddItem = task => {
    console.log('above is task');
    this.setState({
      tasks:[...tasks, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }



  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    this.handleAddItem(this.state.input);
    console.log(this.state.input);
    
  }

  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>My to-do today list:</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
          name="todoitem"
          placeholder="What do you need to do?"
          value={this.state.input}
          onChange={this.handleInputChange}
          />
          <button>Add to-do</button>
        </form>
        <div>
          <ul>
           {tasks.length > 0 ? tasks.map(task => <li key={task.id}>{task.task}</li>) : null}
        
           
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
