import React from 'react';
import ReactDom from 'react-dom' 
import Todo from './Todo'


class TodoList extends React.Component {
    render(){
        return(
            <div>

                {this.props.todos.map(todo =>{
                   return <Todo  key={todo.id} handleClick={this.props.handleClick} todo={todo} />
                })}
            </div>
        )
    }
}

export default TodoList