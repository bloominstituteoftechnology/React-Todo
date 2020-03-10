import React from 'react';
import ToDoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './components/Todo.css'
import styled from 'styled-components';

const FormBack = styled.div`
background-color: grey;
text-align: center;`


const toDo = [
  {
    task: 'Write Script',
    id: 1,
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state={
      toDo: toDo,
      task: ''
    }
  }

  toggleToDo = clickedItemId => {
    this.setState({
      toDo: this.state.toDo.map(item => {
        if (item.id === clickedItemId){
        return {
          ...item,
          completed: !item.completed
        }
      }else {
        return item
      }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      toDo: [...this.state.toDo, newTask]
    })
  }

  clearTask = () => {
    this.setState({
      toDo: this.state.toDo.filter(item => {
        if (item.completed === true){
          return item.completed === false
        } else{
          return item;
        }
      })
    })
  }
  
  render() {
    return (
      <FormBack>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <ToDoList toDo={this.state.toDo} toggleToDo={this.toggleToDo}
        clearTask={this.clearTask}/>

      </FormBack>
    );
  }
}

export default App;


