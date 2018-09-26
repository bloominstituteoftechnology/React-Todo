import React from 'react';
import 

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDoList: [];
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
