import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
   constructor() {
    super();

    this.state = {
      todoList: []
    }
  }

  addItemHandler = e => {
    e.preventDefault();
    const inputValue = e.target.previousSibling.value;
    const id = Date.now();
    return this.updateState(inputValue, id);
  }
  updateState = (value, id) => {
    const todoItem = {
      task: `${value}`,
      id: id,
      completed: false
    }

    const todoList = this.state.todoList;
    todoList.push(todoItem);
    this.setState({todoList})
  }
  
  render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App</h2>
//       </div>
//     );
//   }
// }
return (
       <div>
          <h1>Todo List: MVP</h1>
          <TodoList list={this.state.todoList} submit={this.addItemHandler} />
      </div>
    );
  }
}

export default App;
