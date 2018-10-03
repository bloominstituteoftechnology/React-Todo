import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
    super();
    this.state = {
      todoList: [
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

      newItem: '',

    };
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    const todoList = [...this.state.todoList];
    todoList.push({ task: this.state.newItem});
    this.setState({ todoList });
  };

  render() {
    return (
      <div>
        <TodoList
          todoList={this.state.todoList}
        />
        <TodoForm
          value={this.state.task}
          changeHandler={this.changeHandler}
          addNewItem={this.addNewItem}
        />
      </div>
    );
  }
}

export default App;
