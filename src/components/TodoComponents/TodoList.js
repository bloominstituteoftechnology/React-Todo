// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }

  render(){
    // Map over the todo Arr. Set the key, todo and onTodoClick props of the Todo component
    return (
      <div>
        {this.props.todo.map( (todo,ind) => <Todo key={ind+todo.task} todo={todo} onTodoClick={this.props.onTodoClick}/>)}
      </div>
  )
}
}

export default TodoList