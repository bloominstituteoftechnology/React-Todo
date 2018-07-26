import React from 'react';
// import TodoItem from './TodoItem';

const TodoItem = TodoItemProps => {
  // console.log(TodoItemProps.complete)

  return (
    <div
      className="todo-item" onClick={TodoItemProps.handleClick}>
      Task {TodoItemProps.data.taskNumber}: {TodoItemProps.data.taskFromCopy}
    </div>
  );
};

const DisplayTodoList = TodoListProps => {
  // console.log(TodoListProps.complete)
  return (
    <div>
      {TodoListProps.todoList0.map( (x) => <TodoItem
        key={x.id}
        data={x}
        handleClick={TodoListProps.complete}
        />)}
    </div>
  );
};

export default DisplayTodoList;
