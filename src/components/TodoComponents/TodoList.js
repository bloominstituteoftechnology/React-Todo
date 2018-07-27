import React from 'react';
// import TodoItem from './TodoItem';



const TodoItem = ({data, handleClick} ) => {
  // console.log(TodoItemProps.complete)

  return (
    <div
      className="todo-item" className={data.completed ? "todo-item-completed" : null} // if data.completed is true change to "todo-item-completed" if it is not set it to nothing. 

      data={data}
      onClick={ (event) => handleClick(data.id , event)}>
      Task {data.taskNumber}: {data.taskFromCopy}
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
