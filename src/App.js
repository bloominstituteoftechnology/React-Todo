import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';




class App extends React.Component {
  constructor(){
      super();

      this.state = {
        todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
        ]
        }
  }

  addItemHandler = (event) => {
    event.preventDefault();
    this.state.todo.push(
      {task: event.target.previousSibling.value,
      id: Date.now(),
      completed: false}
    )
    this.setState();
    console.log(this.state.todo);
  }

  render() {
    return (
    <div>
      <ToDoList list={this.state.todo}/>
      <ToDoForm submit={this.addItemHandler}/>
    </div>
    )
  }
}

export default App
