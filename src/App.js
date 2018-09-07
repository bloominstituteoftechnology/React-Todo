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

addTask = event => {
  event.preventDefault();
    if(this.state.inputText){
    this.setState({todoList: [...this.state.todoList, this.state.inputText], inputText: ''});  
    } 
};
    
handleInput = event =>{ this.setState({[event.target.name]: event.target.value});}

  render() {

    
    return (
      <div>
        <Todo />

        <TodoForm 
        addTask={this.addTask} 
        inputText={this.state.inputText} 
        handleInput={this.handleInput}
        inputName='inputText' 
        />

        <TodoList todos={this.state.todoList} />
        
      </div>
    );
  }
}

export default App;
