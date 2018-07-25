import React from 'react';
import ReactDOM from "react-dom";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const sample = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      list: sample
    };
  }

  handleUpdateState = () => {
    const list = this.state.list.slice();
    list.push({
      task: this.state.task,
      id: new Date(),
      completed: false
    });
    this.setState({ list: list });
  };

  handleInputChange = event => {
    this.setState({task: event.target.value})
  }

  updateTask = event => {
    event.target.className = event.target.className === 'false' ? 'true' : 'false'
  }

  handleCompleted = () => {
    const list = this.state.list.slice();
    const newList = list.filter(item => !item.completed)
    
    this.setState({ list: newList});
  }

  render() {
    // console.log("STATE: ", this.state);
    return (
      <div>
        <TodoList list={this.state.list} updateTask={this.updateTask}/>
        <TodoForm inputChange={this.handleInputChange} dataChange={this.handleUpdateState} clearCompleted={this.handleCompleted}/>
      </div>
    );
  }
}

export default App;
