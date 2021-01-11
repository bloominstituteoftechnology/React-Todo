
import React from 'react';
import Todo from './Todo';

class ToDoList extends React.Component{
    
    render(){
        // console.log(this.props)
        return(
            <ul>
            {this.props.todosArray.map((item)=>{
                return <Todo todoName={item.todoName} handleTodoToggle={this.props.handleTodoToggle} key={item.id} item={item}/>
            })}
            </ul>
        )
    }
}

export default ToDoList;