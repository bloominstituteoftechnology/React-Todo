import React from 'react';

const TodoForm = props => {
  return (
      <div>
          <form>
              <input type="text" 
              name="inputText"
              placeholder="What Do you Need to Do?"
              value={props.inputText} 
              onChange={props.handlesChange}
              />


              {/* <input type = 'text'
              name= 'inputTextTwo'
              placeholder='Stuff'
              value={props.inputTextTwo}
              onchange={props.handlesChange}
                />

              <input
                name="text"
                type="inputTextThree"
                placeholder="More Stuff"
                value={props.inputTextTwo}
                onchange={props.handlesChange}
                />; */}



              <button onClick={props.addTask}>Add New Task</button>
          </form>
      </div>



  );
};

export default TodoForm;
