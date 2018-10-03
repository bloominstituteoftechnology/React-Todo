import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
        item: '', //stores values passed into input
        todos:[
          {
            task: 'Eat Food',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Drink Coffee',
            id: 1528817084358,
            completed: false
          }
        ], //stores values added to todo list
    };
  }

  //HANDLERS

  //input handler
  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  //add handler
  onSubmit = (event) => {
    event.preventDefault();
    const todos = this.state.todos.slice()
    todos.push(
      {task:this.state.item, completed: false, id: Date.now()});
      this.setState({todos, item: ""});
  }    

  

 


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm
          value={this.state.item}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
