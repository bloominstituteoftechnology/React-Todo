import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [{
        task: "organize Garage",
        id: 124325234,
        completed: false
      }

      ],
      newTasks: ""
    };
  };
  addToNewTasks = event => {
    this.setState({ newTasks: event.target.value});
  }
  addToList = () => {
    const items = this.state.tasks.slice();
    items.push({task: this.state.newTasks, id: Date.now(), completed: false});
    this.setState({tasks: items, newTasks: ""});
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do App: MVP</h2>
        <TodoList listTasks={this.state.tasks} />
        <TodoForm newValue={this.state.newTasks} addToNewTasks={this.addToNewTasks} addToList={this.addToList}/>
      </div>
    );
  }
}

export default App;
