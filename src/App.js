import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    this.state = {
      toDos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Run Marathon',
          id: 1528817084357,
          completed: false
        }
      ],
      todo:'Add To Do'
    }
  }

  changeTodo = event => {
    this.setState({todo: event.target.value});
  }

  addTodo = props => {
    props.preventDefault();
    const newToDos = this.state.toDos.slice();
    newToDos.push({task: this.state.todo, completed: false, id: Date.now()});
    this.setState({toDos: newToDos, todo: ''});
  }

  crossOut = id => {
    let newToDos = this.state.toDos.slice();
    newToDos.map(item => {
      item.id === id ? item.completed = !item.completed : item.completed = item.completed;
      return item;
    });
    this.setState({toDos: newToDos});
  }

  clearTodo = props => {
    props.preventDefault();
    let newToDos = this.state.toDos.slice();
    newToDos = newToDos.filter(item => !item.completed );
    this.setState({toDos: newToDos});
  }

  render() {
    return (
      <div className="App">
        <h1>Please, Just Do Something</h1>
        <TodoForm changeEvent={this.changeTodo}
                  handler={this.addTodo}
                  clearTodo={this.clearTodo}
                  displayText={this.state.todo} />
        <TodoList items={this.state.toDos}
                  handler={this.crossOut}/>

      </div>
    );
  }
}

export default App;
