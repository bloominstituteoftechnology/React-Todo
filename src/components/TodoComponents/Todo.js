import React from 'react';
class Todo extends React.Component {
  render(){
    return (
      <div className="newTodo">
        <div className="todoText">
          <h3>{this.props.newTodo.todoText}</h3>
        </div>
      </div>
    );
  };
}

export default Todo;