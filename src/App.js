import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    state = {
      todos: [{
          task: "",
          id: Date.now(),
          completed: false,
      }],

       }; //end state;

       valueHandler = (e) => {
            this.setState ({
              task: e.target.value
            });
       }

       submitHandler = (e) => {

          this.setState ({
              task: e.target.state,
          })
       }


  render() {
    
    return (  
      
      <div key={this.state.todos.id} className="App">

        <h1>{this.state.task}</h1>

        <TodoList todos={this.state.todos}
                  valueHandler={this.valueHandler}
                  submitHandler={this.submitHandler}
        />
      </div>
    );
  } //end render
} //end class app







export default App;
