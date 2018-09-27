import React from "react";




class Todo extends React.Component{


    render(){
        return(
            <div onClick={this.props.handleClick}>
            {this.props.todo.task}                
            </div>
        )
    }
}







export default Todo ;