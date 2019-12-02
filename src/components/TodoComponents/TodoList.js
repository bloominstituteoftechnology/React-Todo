import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'

class TodoList extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>
          <Todo tasks={this.props.tasks} done={this.props.done}/>
          <TodoForm add={this.add}/>
        </div>
      );
    }
  }
  
  export default TodoList;
  
