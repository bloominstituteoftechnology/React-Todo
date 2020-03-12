import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      }
  }

  addTask = taskname => {
    this.setState({tasks: [{...this.state.tasks}, {todo: taskname, completed: false, id: Date.now() }]})
  }
  
  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
