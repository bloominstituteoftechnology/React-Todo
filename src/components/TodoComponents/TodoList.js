import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
      <section className='list' >
        {props.list.map(item => (
          <Todo
            key={item.id}
            list={item}
            handleClick={props.handleClick}
            strikeThrough={props.strikeThrough}
          />
        ))}
      </section>
    );
  };
  
  export default TodoList;
  