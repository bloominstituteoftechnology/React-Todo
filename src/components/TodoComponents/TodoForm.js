import React from 'react';

function TodoForms({inputText,handleChange,handleClear,addTask}) {
  return (
  <form>
   <input className="form" placeholder="Add Todo" type="text" name="inputText"
   value={inputText} onChange={handleChange}/>
     <div>
     <button onClick={addTask}>Add Todo</button>
     <button onClick={handleClear}>Clear Completed</button>
     </div>
  </form>
  )
}

export default TodoForms