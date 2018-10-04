import React from 'react';


const TodoList = props => {
  return (
    <div className='TheList'>
      {props.allToDos.map((item, index) => {
        return (<p 
          key={index} 
          onClick={() => props.lineThrough(index)}
          className={item.textDecoration}
          >
            {item.task}
        </p>
        );
      })}
    </div>
  );
};

export default TodoList;

