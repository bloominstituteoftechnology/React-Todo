import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
      <section className='list'>
        {props.list.map(item => (
          <Todo
            key={item.task}
            list={item}
          />
        ))}
      </section>
    );
  };
  
  export default TodoList;
  