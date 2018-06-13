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
    return (
      <div>
        {/* {console.log(this.props.todo,"this.props.todo in TodoList.js")} */}
        {this.props.todo.map( (todo,ind) => <Todo key={ind+todo.task} task={todo.task} />)}
        
      </div>
  )
}
}

export default TodoList