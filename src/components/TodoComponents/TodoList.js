import React from 'react';

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
  };
}

export default TodoList;