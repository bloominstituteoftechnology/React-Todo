import React from 'react';

const tasksArray = [
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
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
      title: "Todo List: MVP",

      tasks: tasksArray,

      value: '',
      
    }
  }

  

  handleUpdateState = () => {
    const tasks = this.state.tasks.slice();
  }
  
  handleInputChange = event => {
   this.setState ({value: event.target.value}
    ) 
  }


  render() {
    return (
         
    );
  }
}

export default App;


