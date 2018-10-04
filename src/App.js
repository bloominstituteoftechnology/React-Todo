import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      todoData : [],
      todoItem : "",
      newTodoItem: ""
    };
  }
  render() {
    return (
      <div>
        <TodoList todoData={this.state.todoData} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
