import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';
import './styles.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); // let's us access lifecycle methods (hooks)
    this.state = {
      todos: [],
      inputText: "",
      completed: false,
      id: Date.now()
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        todos: [...this.state.todos, this.state.inputText],
        inputText: "",   
        completed: false,
        id: Date.now()    
      });
    }
    console.log(this.state.inputText);
    console.log(this.state.completed);
  };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  completeTodo = event => {
    event.preventDefault();    
    this.setState({ 
      todos: [],     
      inputText: "",
      completed: true
    });    
  };
  
  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos} 
          completeTodo={this.completeTodo}
        />
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleInput={this.handleInput}   
          completeTodo={this.completeTodo}       
        />
      </div>
    );
  }
}

export default App;

// addUser = event => {
//   event.preventDefault();
//   if (this.state.inputText) {
//     this.setState({
//       users: [...this.state.users, this.state.inputText],
//       inputText: ""
//     });
//   }
// };

// handleInput = event => {
//   this.setState({
//     inputText: event.target.value
//   });
// };

// // form is called controlled component (vs. uncontrolled)
// render() {
//   // this is a lifecycle hook
//   return (
//     <div>
//       <UserList users={this.state.users} />
//       <UserForm
//         addUser={this.addUser}
//         inputText={this.state.inputText}
//         handleInput={this.handleInput}
//       />
//     </div>
//   );
// }

