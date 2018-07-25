import React from 'react';

const taskArr = [
    {
      task: 'Organize Garage',
      id: Date.now(),
      completed: false,
    },
    {
      task: 'Make Rice',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Complete MVP',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Go for walk',
      id: Date.now(),
      completed: false
    },
    {
      task: 'Read documentation for future projects',
      id: Date.now(),
      completed: null
    },
    {
      task: 'Take Grandma to Grocery Store',
      id: Date.now(),
      completed: false
    }
  ];
  
  const List = (props) => {
    const { task, completed } = props.listProp;
    return (
      <div>
        <h4 class={completed}>task: {task}</h4>
      </div>
    );
  }
  
  
  class Todo extends React.Component {
    constructor() {
      super();
      this.state = {
        todo: taskArr
      }
    }
  
    render() {
      return (
        <div className="todo">
          {this.state.todo.map(item => <List listProp={item} />)}
        </div>
      )
    };
  }

  export default Todo;