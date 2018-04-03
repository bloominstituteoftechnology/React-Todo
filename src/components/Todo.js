import React from 'react';

const Todo = props => {
    return <div>
        {props.todos.map((todo, index) => (
          <div onClick={props.toggleTodo} key={index + todo}>
            {todo}
          </div>
        ))}
      </div>;
};

export default Todo;