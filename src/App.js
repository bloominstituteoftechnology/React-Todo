import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import Todo from './components/TodoComponents/Todo.js';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
      super(props);
      this.state = {
        toDoItems : [
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
            task: 'Lambda Challenge',
            id: 1528817084358,
            completed: false
          },
        ],
        newItem : "",
      };
  } //Constructor end...

  addItemTodoList = (event) => {
        event.preventDefault();
        this.setState({
        toDoItems: [...this.state.toDoItems, {task : this.state.newItem}],
        newItem : ""
      });
  };

  render() {
    return (
      <div>
        <h2>Update ToDo List!</h2>
        <Todo toDoItems = {this.state.toDoItems}/> 
        <TodoForm 
            addItemTodoList = {this.addItemTodoList}
        />

      </div>
    );
  }
}

export default App;
