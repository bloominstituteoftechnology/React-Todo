/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';



const TodoInput = (props) => {

  return (
    <div>
      <form>
        <input  type="text" onChange={props.onInputChange} value={props.value} name="todo"/>
        <input  type="submit" value="submit"/>
      </form>
    </div>
  );

};

export default TodoInput;