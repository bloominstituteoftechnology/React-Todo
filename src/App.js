import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
      newTodo: "",
      todos: [{
          task: "",
          id: "",
          completed: false,
      }],

       }; //end state;

       valueHandler = (e) => {
            this.setState ({
              newTodo: e.target.value,
            });
       }

  submitHandler = () => {
    let data = {
      task: this.state.newTodo, 
      id: Date.now(),
      completed: false,
    };
    
    this.setState({
      newTodo: "",
      todos: [...this.state.todos,  data ],
    })
  };


  render() {
    
    return (  
      
      <div >

        <h1>My Todo List</h1>

        <TodoList todos={this.state.todos}
                  valueHandler={this.valueHandler}
                  submitHandler = {this.submitHandler}
                  />
      </div>
    );
  } //end render
} //end class app







export default App;
