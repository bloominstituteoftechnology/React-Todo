import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList  from './components/TodoComponents/TodoList'
//import Todo  from './components/TodoComponents/Todo'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        todoList: [],
        inputText: ''
        
    };

  
}

addTask = event => {
  event.preventDefault();

    this.setState({todoList: [...this.state.todoList, this.state.input]});  
    
}
    
handleInput = event => this.setState({inputText: event.target.value});

  render() {

    
    return (
      <div>
      
        <TodoForm 
        addTask={this.addTask} 
        inputText={this.state.inputText} 
        handleInput={this.handleInput} 
        />

        <TodoList todos={this.state.todoList} />
        
      </div>
    );
  }
}

export default App;
