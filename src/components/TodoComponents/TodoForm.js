import React from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

const TodoForm = (props) => {
    return <div>
        <TodoList itemStrike={props.itemStrike} todoList={props.todoList} addToList={props.addToList} clearList={props.clearList} clearDone={props.clearDone} />
        <Todo addToList={props.addToList} clearList={props.clearList} todoItem={props.todoItem} changeHandler={props.changeHandler} value={props.todoItem} clearDone={props.clearDone} />
      </div>;
}

export default TodoForm;
