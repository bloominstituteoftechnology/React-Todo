import React from 'react';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (props) {
    super(props);
    this.state = {
      header: "Todo List: MVP",
      tasks: [],
      task: ""
    };
  }

  addTask = event => {
    console.log(event.target.value);
    this.setState({ task: event.target.value});
  }

  addTodo = () => {
    const tasks = this.state.tasks.slice();
    tasks.push(this.state.task);
    this.setState({tasks: tasks, task: ""});
  }

  render() {
    console.log("render called")
    return (
      <div>
        <h2>{this.state.header}</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
