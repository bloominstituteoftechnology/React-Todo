import React from 'react';

const TodoForm = props => {
  return (
      <div>
          <form>
              <input type="text" 
              task="inputText"
              placeholder="What Do you Need to Do?"
              value={props.inputText} 
              onChange= {props.handlechange}
              />
              <input type = 'text'
              task = 'inputTextTwo'
              placeholder='Stuff'
              value={props.inputTextTwo}
              onchange={props.handleChange}
                />

              <input
                type="text"
                task="inputTextThree"
                placeholder="More Stuff"
                value={props.inputTextTwo}
                onchange={props.handleChange}
                />;



              <button onClick={props.addTask}>Add New Task</button>
          </form>
      </div>



  );
};

export default TodoForm;
