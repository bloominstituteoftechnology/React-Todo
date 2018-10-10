import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  //stateful component

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();

    this.state = {
      tasks: []
    };
  }

  addTodo(){
    this.setState(this.state.tasks);
  }
  render() {
    return (
      <div className="main-container">
        <TodoForm />
        <TodoList todoList={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
