import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

let testArray = [{task:'Fish', id: Date.now(), completed: false},{task:'More Fish', id: Date.now() + 1, completed: false}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor (props) {
    super();
    this.state={todoList: testArray};
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
  clearComplte= () =>{
    
  }
  complete = (event) =>{
    console.log(event.target.id)
    const todoListCopy = this.state.todoList;

    event.target.classList.toggle('complete');
    todoListCopy.forEach(element => {
      if(element.id === event.target.id || element.completed === false){

        element.completed = true;
        debugger;

      }
    });
    this.setState({ todoList: todoListCopy });

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
        <TodoForm methods={[this.addToList, this.handleKeyPress]} />
      </div>
    );
  }
}

export default App;
