import React from "react";

// import Todo from './components/TodoComponents/Todo';
// import TodoList from './components/TodoComponents/TodoList';

const myArr = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  }
];

const TodoTask = props => {
  const { task } = props.todoDataProp;
  return (
    <div>
      <h4>Name: {task}</h4>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: myArr
    };
  }

  handleUpdateState = () => {
    const todoData = this.state.todoData.slice();
    // clone our state todoData array.
    todoData.push({
      task: this.state.message,
      id: Date.now(),
      completed: false
    });
    // push our new animal item into the todoData array.
    this.setState({ todoData: todoData });
    // FROM REACT API the ONLY way to change state.
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ message: event.target.value });
  };

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        {this.state.todoData.map(task => <TodoTask todoDataProp={task} />)}
        <input placeholder="...todo" onChange={this.handleInputChange} />
        <button onClick={this.handleUpdateState}>Add Todo</button>
        {/*All events in React go through what's called the Synthetic Event*/}
        {/*Events are tied to user interaction with our code*/}
        <button onClick={this.handleUpdateState}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
