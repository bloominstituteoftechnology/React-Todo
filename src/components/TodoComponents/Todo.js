import React from 'react';

const Todo = props => {
    return <div>
        <input type="text" placeholder="what to do?" onChange={props.changeHandler} value={props.todoItem} />
        <button>ADD</button>
      </div>;
}

export default Todo;