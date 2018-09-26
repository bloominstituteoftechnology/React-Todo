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
    console.log(event.target.value)
    this.setState({
      newTask: event.target.value
    })

    
  }
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList list = {this.state.todo}/>
        <ToDoForm addItem = {this.addItem} handleInput = {this.handleInput}/>

      </div>
    );
  }
}

export default App;
