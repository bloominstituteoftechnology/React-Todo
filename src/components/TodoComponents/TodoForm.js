import React from 'react';
import styled from 'styled-components';

const FormStyle= styled.div`
display:flex;
flex-direction: column;
width: 40%;
margin-left: 30%;
padding-top: 20px;
background: #0fbfff;
color: #ffffff;
font-size: 150%;
font-weight: 700;
align-items:center;

[type="button"]{
background-color: #4CAF50;
border-radius:10px;
color: OldLace;
padding-top: 10px;
padding-bottom: 10px;
font-size: 150%;
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