import React, {Component} from 'react';
import ToDoList from './ToDoList';

// const App = () => (
//   <div>
//     <h2>Todo App</h2>

//   </div>
// );

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTask: "",
      ToDo: ["Get eggs", "Walk dog", "Wash dishes"]
    };
  }

  handleAddTask = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitTask = () => {
    const { ToDo } = this.state;
    ToDo.push(this.state.newTask);
    this.setState({ ToDo, newTask: ""});
  };

  myStrikeThrough = e => {
    e.target.style.textDecoration = e.target.style.textDecoration === '' ? 'line-through' : ''; //ternaries are dumm
  };
  
  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <ToDoList {...this.state} toggleClick={this.myStrikeThrough}/>
        <input
          type="text"
          name="newTask"
          placeholder="Add a new task"
          value={this.state.newTask}
          onChange={this.handleAddTask}
        />
        <button onClick={this.handleSubmitTask}>Add Task</button>
      </div>
    );
  }
}

export default App;
