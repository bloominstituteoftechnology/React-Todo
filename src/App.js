import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      inputText: '',
      todoList: [
        {
          task: 'task',
          id: 1,
          completed: false,
        }
      ],
    };
  }
}