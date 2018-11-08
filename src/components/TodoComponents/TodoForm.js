import React from 'react';

const TodoForm = props => {
  return (
      <div>
          <form>
              <input 
                type="text" 
                name="inputText"
                placeholder="What Do you Need to Do Today?"
                value={props.inputText} 
                onChange={props.handleChange}
              />

              <button onClick={props.addTask}>Add New Task</button>
              <button onClick={props.clearXedOutTask}
               > Clear Completed Tasks </button>
          </form>
      </div>



  );
};

export default TodoForm;


{/* <input type = 'text'
              name= 'inputTextTwo'
              placeholder='Stuff'
              value={props.inputTextTwo}
              onchange={props.handleChange}
                />

              <input
                name="text"
                type="inputTextThree"
                placeholder="More Stuff"
                value={props.inputTextTwo}
                onchange={props.handleChange}
                />; */}
