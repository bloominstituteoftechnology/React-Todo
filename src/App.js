import React from 'react';

const Task = props => {
  return <p>Task #{newArr.length}: {props.propsMessage}</p>;
}



const newArr = [
{ id: 0,
  task: {}}
];

const newObj = {
  id: 1,
  task: {}
};

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      message: "this is the message from state",
      taskList: newArr,
    };
  };


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = (y) => {
    console.log('updateStatus called')
    this.setState({message: "a task was added"});
    this.setState({tasklist: newArr.push(newObj.task = "hello")});
  }

  deleteTask = () => {
    console.log('updateStatus called')
    this.setState({message: "a task was deleted"});
    newArr.pop()
  }

  changeStateMessage = (x) => {
    console.log(x.target.value);
    return x.target.value;
  }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <Task propsMessage={this.state.message} />
        {/* <Task propsMessage={this.state.task[0].id} /> */}
        {/* {this.state.task.map(x => <Task propsMessage={x.task} />)} */}
        {this.state.taskList.map(x => <Task propsMessage={this.state.taskList[1]} />)}
        <input placeholder="newtask" onChange={this.changeStateMessage}></input>
        <button onClick={this.addTask}>Add task</button>
        <button onClick={this.deleteTask}>Delete task</button>
      </div>
    );
  }
}

export default App;
