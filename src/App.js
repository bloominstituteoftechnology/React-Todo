import React from 'react';

let todoList = [
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
  constructor(){
    super();
    this.state = {
      list: todoList
    }
  }
  
  render() {
    console.log(this.state.list);
    return (
      <div>
        <h2>Look!</h2>
      </div>
    );
    
  }
}

export default App;
