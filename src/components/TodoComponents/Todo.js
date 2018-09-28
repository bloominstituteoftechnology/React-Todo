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
    if(this.props.todo.completed === true){
      return (
        <div className="text-strike todo" onClick={handleSelected}>{this.todo}</div>
      )
    }
    else{
      return (
        <div className="todo" onClick={handleSelected}>{this.todo}</div>
      )
    }
    
  }
}


export default Todo;
