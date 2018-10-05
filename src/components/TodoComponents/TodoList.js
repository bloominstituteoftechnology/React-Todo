import React from 'react';
import"./Todo.css"
import Todo from "./Todo"


const TodoList = props => (
    <div className='TheList'>
      {props.allToDos.map(item => {
        return (<Todo 
          className="item-on-list"
          key={item.id} 
          toggleCompleted={() => props.toggleCompleted}
          item={item}
          />
        );
      })}
    </div>
  );

export default TodoList;

