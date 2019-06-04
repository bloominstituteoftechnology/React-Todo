import React from 'react';
import Todo from './Todo';

const TodoList = props => { //props become array of objects
  //console.log(props) //to see it in console
  return (
     <div className='todo-list'> 
      {props.todos.map(todo => 
          <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
      )}
    </div>
  );
};

export default TodoList;


//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

/////////////////////////////////
//EXAMPLE
/*
import React from "react";
import Item from "./Item";
const GroceryList = props => {
  // Sorting by completed
  // In GroceryList add a const called sortedList that sorts props.groceries by the purchased field.
  // Map over sortedList instead of props.groceries.
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
    </div>
  );
};

export default GroceryList;
*/