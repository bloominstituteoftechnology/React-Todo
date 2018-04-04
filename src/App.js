import React, {Component}from 'react';

// const App = () => (
//   <div>
//     <h2>Todo App</h2>

//   </div>
// );

// export default App;

const TodoList = props => {
  // This is "Reading" State
  return (
    <div>
      <h1>{props.newAnimal}</h1>
      {props.animals.map((animal, index) => (
        <div key={animal + index}>{animal}</div>
      ))}
    </div>
  );
};

export default TodoList;
