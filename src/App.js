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
    completed: false
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

  render() {
    // console.log("STATE: ", this.state);
    return (
      <div>
        <TodoList list={this.state.list}/>
        <TodoForm inputChange={this.handleInputChange} dataChange={this.handleUpdateState} />
      </div>
    );
  }
}

export default App;
