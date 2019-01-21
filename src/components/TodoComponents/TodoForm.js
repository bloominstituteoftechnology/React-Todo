import React from 'react';

function ToDoForm(props) {
  console.log('To Do Form is re-rendering');
  return (
    <form>
      <input
        value={props.value}
        type="text"
        name="todo"
        placeholder="Put It On the List!"
        onChange={props.handleChanges}
      />
      <button onClick={props.addNewItem}>Add To Do Item</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    
    </form>
  );
}

export default ToDoForm;

// import React from 'react';

// function ToDoForm(props) {
//   console.log('To Do Form is re-rendering');
//   return (
//     <form>
//       <input
//         value={props.newTextInput}
//         type="text"
//         name="newTextInput"
//         placeholder="Put It On the List!"
//         onChange={props.handleChanges}
//       />
//       <button onClick={props.addNewItem} type="submit">Add To Do Item</button>
//       <button>Clear Completed</button>
      
//     </form>
//   );
// }

// export default ToDoForm;
