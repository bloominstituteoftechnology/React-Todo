import React from "react";
import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'

// const styledLabel = styled.div`
//   text-decoration: line-through;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 5%;
// `

const Todo = props => {
    console.log(props)
  return (
    <div>
      <Checkbox 
        // required
        label={props.item.task}
        onClick={() => props.handleChange(props.item.id)}
      />

    </div>
  );
};

export default Todo;


{/* <input 
  type="checkbox"
  value={props.item.task}
  
/>
{props.item.id} */}