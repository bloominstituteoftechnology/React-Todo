import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      TodoArray: [
        {
          inputText: '',
        },
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        }
      ]
    
    }
    
    function HandleChanges (e) {
      this.setState({
        inputText: e.target.value
      })
    }

    function submitHandler (e) {
      e.preventDefault();
      const NewTask = {
        task: this.state.name,
        id: this.state.id,
        completed: false
      }
      
      this.setState({
        TodoArray: [...this.state.TodoArray, new NewTask(this.state.inputText)],
        NewTask
      })
    }

  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
       <TodoList todos={this.state.TodoArray}/>
       <TodoForm 
       handle={this.HandleChanges}
       submit={this.submitHandler}
       />
      </div> 
      
    );
  }
}

export default App;
