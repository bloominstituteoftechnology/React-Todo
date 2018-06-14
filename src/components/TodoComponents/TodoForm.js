import React from 'react';


const TodoForm = props => {

let formStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap'
}

let inputStyles = { 
  
  height: '40px', 
  width: '80%', 
  color: 'black', 
  margin: '10px',
  borderRadius: '5px',
  fontSize: '16px',
  paddingLeft: '10px'

}

let addStyles = { 
    
  height: '40px', 
  width: '150px', 
  color: 'white', 
  backgroundColor: '#1B6BFE',
  margin: '10px', 
  borderRadius: '5px',
  fontSize: '16px'

}

let clearStyles = { 
    
  height: '40px', 
  width: '150px', 
  color: 'white', 
  backgroundColor: '#DE434B',
  margin: '10px', 
  borderRadius: '5px',
  fontSize: '16px'

}

  return (
    <form style ={formStyles}>
      <input
        style={ inputStyles }
        type="text"
        // this needs to be different than the function on app.js (clickAddToDo does as well)
        onChange={props.typeInputNewTodo} 
        placeholder="Add todo"
        name="todo"
        value={props.value}
      /> <div>
      <button style={ addStyles } onClick={props.clickAddTodo}>
      Add todo</button>
      <button style={ clearStyles } onClick={props.clickClearTodos}>
      Clear todos</button>
      </div>
    </form>
  );
};

export default TodoForm;