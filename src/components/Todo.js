import React from 'react';

class Todo extends React.Component{
    
    toggleTodoWithId=()=>{
        this.props.handleTodoToggle(this.props.item.id)
    }

    render(){
        // console.log(this.props.item.completed)
        return(
            <div className={`${this.props.item.completed ? 'completed':''}`} onClick={this.toggleTodoWithId}>
                {this.props.todoName}
            </div>
        )
    }
}
export default Todo;