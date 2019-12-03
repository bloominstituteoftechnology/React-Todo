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
      todoArray: [],
      toDo: ""
    }
  }
 addTodo = newItemText => {
    const newToDo = {
      toDo: newItemText,
      id: Date.now(),
      completed: false
    };
    console.log('new todoo is: ', newToDo)
    this.setState({
      todoArray: [...this.state.todoArray, newToDo], 
     
    });
  };

//   handleChange = event => {
//     event.preventDefault();
//     console.log('handleChange is firing, event.target.value is: ', event.target.value)
//  this.setState({ toDo: event.target.value });
//   };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoArray={this.state.todoArray} />
        <TodoForm addItem={this.addTodo} />
      </div>
    );
  }
}

export default App;
