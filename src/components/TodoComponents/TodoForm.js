import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <form className='todo-form'>
      <input placeholder='Task' />
    </form>
  }
}

export default TodoForm;