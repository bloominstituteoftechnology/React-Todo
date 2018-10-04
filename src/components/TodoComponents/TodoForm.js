import React from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

const TodoForm = (props) => {
    console.log(props);
    return <div>
        <TodoList />
        <Todo changeHandler={props.changeHandler} value={props.todoItem} />
      </div>;
}

export default TodoForm;
