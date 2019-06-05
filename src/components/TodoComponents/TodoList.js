import React from 'react';
import Todo from './Todo'

const toDoArray = [];
const newId = Date.now();

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: toDoArray,
      task: '',
      id: { newId },
      completed: false
    }
  }

  render() {
    return (
      <div className='todoList'>
        {this.state.toDoArray.map((item, index) => {
          return <Todo item={item} key={index} />
        })};
      </div>
    )
  }
}

export default TodoList;