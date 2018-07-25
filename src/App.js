import React from 'react';

const Task = props => {
  return <p>hello, {props.propsMessage}</p>;
}

const newArr = [
  { id: 1},
  { id: 2},
  { id: 3}
];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      message: "this is the message from state",
      task: newArr,
    };
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = () => {
    console.log('updateStatus called')
    this.setState({message: "this is an updated status"});
    newArr.push({ id: 4})
  }
  deleteTask = () => {
    console.log('updateStatus called')
    this.setState({message: "this is an updated status"});
    newArr.pop({ id: 4})
  }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <Task propsMessage={this.state.message} />
        <Task propsMessage={this.state.task[0].id} />
        {this.state.task.map(x => <Task propsMessage={x.id} />)}
        <Task propsMessage={this.state.task[0].id} />
        <input placeholder="newtask"></input>
        <button onClick={this.addTask}>Add task</button>
        <button onClick={this.deleteTask}>Delete task</button>
      </div>
    );
  }
}

export default App;
