import React from "react";
// No child component is part of this parent component so no importing is necessary

// Creating JSX <form> tag to hold all of the Button/Input Functionalities
// *POINT OF CONFUSION* 

function ToDoForm(props) {
  return (

    // Created JSX form parent tag containing JSX input and 2 button child tags 
    <form>
      <input value={props.inputText} onChange={props.handleInput} />
      <button onClick={props.addUser}>Add User</button>
      <button onClick={props.clearList}>Clear List</button>
    </form>
  );
}

export default ToDoForm;