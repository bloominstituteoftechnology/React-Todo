import React from 'react';
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


//comment
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      thingsToDo: [],
      temp: '',
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState(
      {temp: event.target.value}
    )
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <p>{this.state.thingsToDo}</p>
        <input type="text" value={this.state.temp} onChange={this.handleChange} />
      </div>
    );
  }
}