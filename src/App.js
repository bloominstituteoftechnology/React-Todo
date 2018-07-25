import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor (props) {
    super();
    this.state={todoList: []};
  }

  addToList = () => {
    const todoListCopy = this.state.todoList;
    
    todoListCopy.push({
      task: document.getElementById('todoInput').value , 
      id: Date.now(), 
      completed: false
    })
    document.getElementById('todoInput').value ='';
    this.setState({ todoList: todoListCopy });
  };
  clearComplete= () =>{
    const todoListCopy = this.state.todoList;
    let recopy = todoListCopy.filter(element =>{
      if (element.completed === false) {
        return true;
      }
      else{
        return false;
      }
    })
    console.log(recopy)
    this.setState({ todoList: recopy });

  }
  complete = (event) =>{
    const todoListCopy = this.state.todoList;
    // event.target.classList.toggle('complete');
    let recopy = todoListCopy.map(element => {
      if(element.id.toString() === event.target.id && element.completed === false){
        element['completed'] = true;
      }

      return element;
    });
    
    this.setState({ todoList: recopy });

  }
  
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.addToList();
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList methods={this.complete} array={this.state.todoList} />
        <TodoForm methods={[this.addToList, this.handleKeyPress, this.clearComplete]} />
      </div>
    );
  }
}

export default App;
