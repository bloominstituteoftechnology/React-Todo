// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.todoList = props;
  }

  render() {
    console.log(this.props.todoList);
    return (<div>a</div>);
    /*
    return (
      <div className='todo-list'>
        {this.todoList.map((todo) => {
          <Todo todoInfo={todo} />
        })}
      </div>
    )
    */
  }
}

export default TodoList;