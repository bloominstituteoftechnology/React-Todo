import React from "react";

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.todo= this.props.todo.task;
    this.id = this.props.todo.id
  }
  render() {
   const handleSelected = () =>{
     this.props.selected(this.id);
   }
    return (
      <div onClick={handleSelected}>{this.todo}</div>
    )
  }
}


export default Todo;
