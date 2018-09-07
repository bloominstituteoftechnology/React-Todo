import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList  from './components/TodoComponents/TodoList'
import Todo  from './components/TodoComponents/Todo'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        todoList: [],
        inputText: ''
        
    };

  
}

// inputText = [event.target.name];

addTask = event => {
  event.preventDefault();
    if(this.state.inputText){
    this.setState({todoList: [...this.state.todoList, this.state.inputText], inputText: ''});  
    } 
};
    
handleInput = event =>{ this.setState({inputText: event.target.value});}

//toggleCompleted = event => {}

//clearCompleted = event => {}

  render() {

    
    return (
      <div>
        <Todo />

        <TodoForm 
        addTask={this.addTask} 
        inputText={this.state.inputText} 
        handleInput={this.handleInput}
        clearCompleted = {this.clearCompleted}
        
        />

        <TodoList 
        todos={this.state.todoList} 
        toggleCompleted={this.toggleCompleted}
        />
        
      </div>
    );
  }
}

export default App;
