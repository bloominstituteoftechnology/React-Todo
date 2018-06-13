import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      list: [
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
    };
  }

  changeGreetingHandler = event => {
    console.log(event.target.value);
    this.setState({ list: event.target.value });
  };
  
  render() {
    return (
      <div>
        <h2>TO DO LIST</h2>
        <ul>{this.state.list.map(x => <li>{x.task}</li>)}</ul>
        <input
          type="text"
          placeholder="...todo"
          onChange={this.handleInputChange}
          value={this.state.title}
          name="title"
        />
        <button onSubmit={this.state.list}>Add Todo</button>
        <button onSubmit={this.state.list}>Clear Completed</button>
      </div>
      
    );
  }
}

export default App;
