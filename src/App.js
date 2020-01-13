import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

let toDoList = [
  {
    id: 0,
    todoitem : 'Write up diary',
    isDone : false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();

    this.state = {
      toDoList: toDoList
    }
  }

  toggleItem = id => {
    const newTodoList = this.state.toDoList.map(item => {
      if (item.id === id){
        return {
          ...item,
          isDone: !item.isDone
        }
        } else {
          return item;
        }
    })
    this.setState({
      toDoList: newTodoList
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todo={this.state.toDoList} addTodo={this.addTodo} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
