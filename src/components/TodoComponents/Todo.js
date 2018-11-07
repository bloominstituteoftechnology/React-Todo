import React from 'react';

// const Todo = props => <textarea>Test</textarea>

// const Todo = props => {
//     return <h1>{props.characterOnProps.characterName}</h1>;
//   };

// export default Todo

const Character = props => {
    return <h1>{props.characterOnProps.myToDo}</h1>;
  };
  
  export default Character;