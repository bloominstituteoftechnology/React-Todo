import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
      title: "Todo List: MVP",

      tasksArray: [
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
    }
  }

  render() {
    return (
         <div>
           <h1>{this.state.title}</h1>
         </div>
    );
  }
}

export default App;


