import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>I am a Todo List</div>
    );
  };
};

export default TodoList;