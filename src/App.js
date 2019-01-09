import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: data,
      todo: ''
    }
  }

  handleChanges = ev => {
    this.setState({ todo: ev.target.value })
  }

  addTodo = ev => {
    ev.preventDefault()
    this.setState({ 
      data: [
        ...this.state.data, {task: this.state.todo, id: Math.floor(Math.random() * 1000000), completed: false}], todo: '' })
    console.log(this.state.data)
  }

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <TodoList data={this.state.data}/>
        <TodoForm 
          todo={this.state.todo} 
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
