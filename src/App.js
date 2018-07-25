import React from 'react';
import Todo from './components/TodoComponents/Todo.js';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [{task: 'do homework'},{task: 'complete MVP'}]
      }
    }
  // handleUpdateState(){
  //   const tasks = this.state.tasks.slice();
  //   tasks.push('new data');
  //   this.setState({tasks: tasks});
  // };
  // handleInputChange = event => {
  //   this.setState({tasks: event.target.value});
  // }
  render() {
    return (
      <div>
        <h1> Todo List MVP</h1>
        <TodoList list={this.state.tasks}/>

        <TodoForm />
      </div>
    );
  }
}

export default App;
