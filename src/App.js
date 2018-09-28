import React from 'react';
import  ToDoForm  from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      list:[],
      task:""
    }
  }

  inputHandler = event => {
    const {value} = event.target;
    this.setState({
      task: value,
    })
  }

  addTaskHandler = event => {
    event.preventDefault()
    const obj = {
      task:this.state.task,
      id:Date.now(),
      completed:false,
    }

    this.setState({
      list:[...this.state.list, obj],
      task:" "
    })
  }


  completeToggle = (listId) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === listId ) {
          return {
            task: item.task,
            id: item.id,
            completed: !item.completed
          }
        } else {
          return item;
        }

      })
    })
  }
  clearHandler = (event) => {
    event.preventDefault();
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }
  render() {
    return (
      <div>
        <h2>Need Todo the following items:</h2>
        <TodoList value={this.state.list} 
          completeToggle={this.completeToggle}/>
        <ToDoForm value={this.state.task}
          inputHandler={this.inputHandler} 
          addTaskHandler={this.addTaskHandler}
          clearHandler={this.clearHandler}/>
      </div>
    );
  }
}

export default App;
