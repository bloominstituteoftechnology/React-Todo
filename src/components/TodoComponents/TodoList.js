import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
        { props.list.map((listItem, index) => {
            return <Todo key={listItem.id} listItem={listItem} />
          })}
    </div>
  );
}

export default TodoList;
