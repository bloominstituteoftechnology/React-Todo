import React from 'react';

const toDoArray = [];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: toDoArray,
      task: '',
      id: '',
      completed: false
    }
  };
}