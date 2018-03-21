import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { 'text': 'Wash the dishes', 'completed': false },
        { 'text': 'Make dentist appointment', 'completed': false },
        { 'text': 'Take out the trash', 'completed': false }
      ] 
    }
  }
  render() {
    return (
      <div>
        <ul className="todoList">
          {this.state.tasks.map((item, index) => {
            return <Todo key={index} task={item}/>
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;