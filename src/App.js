import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todo: [
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        }
      ],
      newTask: '',
    }
  }

  addItem = () =>{
    const objItem = {
      task: this.state.newTask,
      id: Date.now(),
      completed: false,
    }
    
    this.setState({
      todo: [...this.state.todo, objItem]
    });
    
  }
  handleInput = event => {
   
    this.setState({
      newTask: event.target.value
    })
  }
  removeTask = () =>{
    this.setState({
      todo: this.state.todo.filter((complete) =>{
        return complete.completed === false
      })
    })
  }
  handleClick = (givenId) => {
    this.setState({
      todo: this.state.todo.map(toDoObj =>{
        if(givenId === toDoObj.id){
          toDoObj.completed = !toDoObj.completed
        }
        return toDoObj;
      })
      
    })

    
  }
  render() {
    console.log(this.state.todo)
    return (
      <div className = "app-to-do">
        <h1 className = "to-do-header">Todo List: MVP</h1>
        <TodoList handleClick = {this.handleClick} list = {this.state.todo}/>
        <ToDoForm   addItem = {this.addItem} handleInput = {this.handleInput} removeTask = {this.removeTask}/>

      </div>
    );
  }
}

export default App;
