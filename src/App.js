import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      inputText: '',
      id: null,
      completed: false
    };
  }

  addTodo = event => {
    event.preventDefault();
    if(this.state.inputText){
      this.setState({
        todos: [...this.state.todos, {todo: this.state.inputText, id: Date.now(), completed: false}],
        inputText: ''
      });
    }
  };

  handleInput = event => {
    this.setState({
      inputText : event.target.value,
    });
  };

  completed = () => {
    
      const newTodos = this.state.todos.slice();
      console.log(newTodos[0]);
      
      
        this.setState({
          completed: !this.state.completed
        });
         
         
        
        
     
      
      
    
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} todoCompleted ={this.completed}/>
        <TodoForm 
        addTodo = {this.addTodo}
        inputText={this.state.inputText}
        handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
