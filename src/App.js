import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

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
        }
      ],
      todo:''
    }
  }

  addTodo = props => {
    props.preventDefault();
    const toDos = this.state.toDos.slice();
    toDos.push({task: this.state.toDos, completed: false, id: Date.now()});
    this.setState({toDos: toDos});
    this.setState({ toDos, todo: '' });
  }

  render() {
    return (
      <div>
        <h1>My to do list</h1>
        <TodoList items={this.state.toDos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
