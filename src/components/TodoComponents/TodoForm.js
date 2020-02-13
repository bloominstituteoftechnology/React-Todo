import React from 'react';
import styled from 'styled-components';

const FormStyle= styled.div`
 display:flex;
 flex-direction: column;
 width: 300px;
 padding: 20px;
 margin: 20px;
 background: #0fbfff;
 color: #ffffff;
 font-size: 150%;
 font-weight: 700;
 border-radius:5px;
 align-items:center;

 [type=text]{
    ul li {
        background: #cce5ff;
        margin: 5px;
      }
 }
`;

const TodoForm = props => {
  return (
    <FormStyle>
      <input
        onChange={props.handleUpdate}
        type="text" name="todo" value={props.value} placeholder="...ToDo"
      />
      <button onClick={props.handleAdd}>Add To Do</button>
      <button onClick={props.handleClear}>Clear Completed</button>
    </FormStyle>
  );
};

export default TodoForm;