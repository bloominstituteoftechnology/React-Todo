import React from "react";

// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const myArr = [
  {
    task: "Organize Garage",
    id: Date.now(),
    completed: false
  }
];

// const Todo1 = props => {
//   const { task } = props.todoDataProp;
//   return (
//     <div>
//       <h4>{task}</h4>
//     </div>
//   );
// };

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
      task: this.state.task,
      id: Date.now(),
      completed: false
    });
    // push our new animal item into the todoData array.
    this.setState({ todoData: todoData });
    // FROM REACT API the ONLY way to change state.
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ task: event.target.value });
  };

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        <TodoList todoArray={this.state.task} />
        {console.log(this.state.task)}
        {/* {this.state.todoData.map(task => <Todo todoDataProp={task} />)} */}
        <input placeholder="...todo" onChange={this.handleInputChange} />
        <button onClick={this.handleUpdateState}>Add Todo</button>
        <button onClick={this.handleUpdateState}>Clear Completed</button>
        <TodoForm />
      </div>
    );
  }
}

export default App;
