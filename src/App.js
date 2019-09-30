import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const taskArray = [{
      
  task: '',
  id: null,
  completed: false

}]




class App extends React.Component {
  constructor(){
    super();
    this.state= {
      tasks: taskArray
  };
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
