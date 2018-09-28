import React from "react";

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.todo= this.props.todo.task;
    this.id = this.props.todo.id
    this.completed = this.props.todo.completed
  }
  render() {
   const handleSelected = () =>{
     this.props.selected(this.id);
   }
    return (
      <div className="todo" onClick={handleSelected}>{this.todo}</div>
    )
  }
}


export default Todo;
