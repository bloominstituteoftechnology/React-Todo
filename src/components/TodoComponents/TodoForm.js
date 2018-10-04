import React from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

const TodoForm = (props) => {
    return <div>
        <TodoList itemStrike={props.itemStrike} todoList={props.todoList} addToList={props.addToList} />
        <Todo todoItem={props.todoItem} changeHandler={props.changeHandler} value={props.todoItem} />

        <button type="submit" onClick={props.addToList}>
          ADD
        </button>
      </div>;
}

export default TodoForm;
