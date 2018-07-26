// import React from 'react';

// const Todo = props => {
//     return(
//         console.log('im props', props);
//         <div
//         style={props.todo.completed ? { textDecoration: 'line-through' } : null}
//         onClick={() => props.handleToggleComplete(props.todo.id)}
//             >
//             TODO: {props.data.task}
//         </div>
//     );
// };

// export default Todo;

import React from 'react';

const Todo = props => {
    console.log('im props', props);
  return (
    <div
    
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
    
  );
  
};

export default Todo;