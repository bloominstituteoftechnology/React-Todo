import React from 'react';
import "./Todo.css";
import {
    Card, CardBody,
    CardSubtitle,
  } from 'reactstrap';
//receives the Todos props map over and display 
class Todo extends React.Component{
    constructor(){
        super();  
    }

    handleClick=()=>{
        this.props.toggleCompleted(this.props.todos.id)
    }
    handleClassName=()=>{
        console.log('in todos:',this.props.todos.completed);
        return (this.props.todos.completed ? 'completed' : '')
    }

render(){
    return(
        <Card className="mb-2 card">
        <CardBody onClick={this.handleClick} 
        className={this.handleClassName()}>
        <CardSubtitle>{this.props.todos.task}</CardSubtitle>
      
        </CardBody>
        </Card>
    )
}
}


export default Todo;
