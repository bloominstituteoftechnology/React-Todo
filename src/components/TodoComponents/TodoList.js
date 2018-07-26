// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
//needs the Todo function to maintain new items added to todo list.
import Todo from './Todo'


//list functional component. setting to props
const TodoList = props => {
  return (
    <div>
      {props.todo.map(done => ( //creates array of new divs  from props, other funtoin hanlders allow for the actual creation of DOM elements. props allows access to base contructor.
        <Todo
            handleComplete = {props.handleComplete}
              key={done.id}
              done={done}
          />
      ))}
    </div>
  );
};

export default TodoList;
