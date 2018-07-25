import React from 'react';



const todo = [
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
      task: myArr,
      todo: [],
      this: ''
    };

  }
 
  handleAddTask = () => {
    const task = this.state.task.slice();
  
  

  }


  render() {
    return (
      <div>
        

        <input placeholder="...todo" onchange={} />
        <button onClick={this.handleUpdateState}>Add ToDo</button>
      </div>
    );
  }
}


