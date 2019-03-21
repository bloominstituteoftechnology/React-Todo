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
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        }
      ],
      inputText: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.HandleChanges = this.HandleChanges.bind(this);

  }  
    submitHandler(e) {
      e.preventDefault();
      const NewTask = {
        task: this.state.inputText,
        id: Date.now,
        completed: false
      }
      
      this.setState({
        TodoArray: [...this.state.TodoArray, NewTask], 
      inputText: '' 
      })
    }

    HandleChanges(e) {this.setState({[e.target.name]: e.target.value})}
      
    

  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
       <TodoList todos={this.state.TodoArray}/>
       <TodoForm 
       handle={this.HandleChanges}
       submit={this.submitHandler}
       value={this.state.inputText}
       />
      </div> 
      
    );
  }
}

export default App;
