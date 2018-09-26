import React from 'react';

class App extends React.Component {
constructor() { 
  super(); 

  this.state = { 
    input: '',
    todoList: [{
      task: '',
      id: 1,
      completed: false
    }],
    }
  };
}

handleClick = (event) => { 
  this.setState({
    task: event.target.value,
    id: Date.now(),
  })
};

handleInput = (event) => { 
  console.log(event.target.value);
  this.SetState({
    input: event.target.value
  })
}


  render() {
    return (
      <div>
        <h2>Oh god it's another to-do app</h2>
        <Form />
      </div>
    );
  }
}

export default App;
