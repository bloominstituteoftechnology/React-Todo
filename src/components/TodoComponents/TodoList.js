import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
  render(){
    return (
        <div>
          {this.props.todoItems.map(item => {
            return (
                <Todo
                 key = {item.id} 
                 item={item} 
                 strike = {this.props.strike} />
            );
        })}
        </div>
    )}
}

export default TodoList