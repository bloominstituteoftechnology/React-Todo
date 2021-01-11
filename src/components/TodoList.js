import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component{
    render(){
        return (
            <div>
                {this.props.todos.map(item=>{
                   return <Todo item={item} key={item.id} handleTodoToggle={this.props.handleTodoToggle}/>
                })}
                <button onClick={this.props.handleTodoCompleted}>Clear completed</button>
            </div>
        )
    }
}

export default TodoList;