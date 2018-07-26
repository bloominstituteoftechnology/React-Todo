import React from 'react';
// import TodoItem from './TodoItem';

const TodoItem = TodoItemProps => {
  return (
    <div>
      Task {TodoItemProps.data.taskNumber}: {TodoItemProps.data.taskFromCopy}
    </div>
  );
};

const DisplayTodoList = TodoListProps => {
  return (
    <div>
      {TodoListProps.todoList0.map( x => <TodoItem key={x.id} data={x} />)}
    </div>
  );
};

export default DisplayTodoList;
