import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor (props) {
    super();
    this.state={todoList: [],
    textBoxString:""}; //the other student said he was updating this state each time there was a key press in the event box, let me see if there's another way
  }

  addToList = () => {
    const todoListCopy = this.state.todoList;
    const inputBox = document.getElementById('todoInput').value;
    todoListCopy.push({
      task: inputBox , 
      id: Date.now(), 
      completed: false
    })
    inputBox.value ='';
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
        <h2>What you're putting off:</h2>
        <div className="todoListContainer">
        <TodoList methods={this.complete} array={this.state.todoList} />
        </div>
        <TodoForm methods={[this.addToList, this.handleKeyPress, this.clearComplete]} />
      </div>
    );
  }
}

export default App;
