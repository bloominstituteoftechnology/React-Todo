import React from 'react';

function TodoForms({inputText,handleChange}) {
  return (
  <form>
   <input placeholder="Task Here" type="text" name="inputText"
   value={inputText} onChange={handleChange}/>
   
   <button>Add Todo</button>
   <button>Clear Todo</button>
   
  </form>
  )
}

export default TodoForms