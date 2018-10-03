// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';

const TodoList = props => {
  return (
    <div>
    {props.allToDos.map(item => {
        return <p className='NEED'>{item.task}</p>;
      })}

      <input
        type="text"
        name="newTask"
        placeholder="...todo"
        onChange={props.changeHandler}
        value={props.newTask}
      />
      <button onClick={props.addNewTask}>Add Todo</button>


      {/* {props.disneyData.map(item => {
        return <h1 className={props.style}>{item.characterName}</h1>;
      })}
      <button onClick={props.changeColor}>Change color</button>

      <div>
        <input
          type="text"
          name="inputText"
          placeholder="yay for inputs!"
          onChange={props.changeHandler}
          value={props.inputText}
        />
        <input
          type="text"
          name="inputTwoText"
          placeholder="yay for inputs!"
          onChange={props.changeHandler}
          value={props.inputTwoText}
        />
      </div>

      <input
        type="text"
        name="newCharacter"
        onChange={props.changeHandler}
        value={props.newCharacter}
      />
      <button onClick={props.addNewCharacter}>Add Character</button> */}
    </div>
  );
};

export default TodoList;

