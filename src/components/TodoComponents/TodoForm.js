import React from "react";
import styled from "styled-components";


const FormDiv = styled.form`
  background: #AF5E62;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 5em;
  max-width: 250px;
  padding: 15px;
  margin: 16px auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background: #A4A89F;
  font-size: 1em;
  margin: .5em;
  padding: 0.25em .75em;
  border: 2px solid #AF5E62 ;
  border-radius: 3px;
`;


const ToDoForm = props => {
  console.log(`todoform`, props)
  return (
    <FormDiv onSubmit={props.submitHandler}>
      <input
        key={props.id}
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Enter task..."
      />
      <StyledButton onClick={props.handleAddtodo} type="submit">Submit</StyledButton>
    </FormDiv>
  );
}

export default ToDoForm; 