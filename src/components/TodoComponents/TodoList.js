import React from 'react';
// import TodoItem from './TodoItem';

const TodoItem = TodoItemProps => {
  return (
    <div className="todo-item" >
      Task {TodoItemProps.data.taskNumber}: {TodoItemProps.data.taskFromCopy}
    </div>
  );
};

const DisplayTodoList = TodoListProps => {
  return (
    <div>
      {TodoListProps.todoList0.map( (x) => <TodoItem
        key={x.id}
        data={x}
        onClick={TodoListProps.complete}/>)}
    </div>
  );
};

export default DisplayTodoList;
