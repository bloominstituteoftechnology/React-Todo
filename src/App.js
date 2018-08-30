import React from 'react';
import ToDoList from './components/TodoComponents/ToDoList.js';
import ToDoForm from './components/TodoComponents/ToDoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [
        { task: 'Add False/True Toggle',
        id: Date.now(),
        completed: true }
      ],
      inputText: ""
    };
  }

  addToDo = event => {
    event.preventDefault();

    if (this.state.inputText)
    this.setState({
      todos: [...this.state.todos,  {task:this.state.inputText, id:Date.now(), completed:false}],
      inputText: ""
    });
  };

  addItem = event => {
    event.preventDefault();
    if(this.state.inputText){
      this.setState({
        todos: [...this.state.todos, {task:this.state.textField, id: Date.now(), completed:false}],
        inputText: ""
      });
    }
  };


  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  clearComplete = event => {
    event.preventDefault();
    console.log("default prevented");
  };

  toggleComplete = id => {
    const newTodos = [...this.state.todos];
    newTodos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
    })   

    this.setState({
      todos: newTodos,

    }, () => 
        console.log(this.state)

      )
  }

  

  render() {
    return (
     <div>
      <ToDoList 
      todos={this.state.todos}
      toggleComplete={this.toggleComplete}
       />
      <ToDoForm
        addToDo={this.addToDo}
        inputText={this.state.inputText}
        handleInput={this.handleInput}
      />
     </div>
    );
  }
}

export default App;
