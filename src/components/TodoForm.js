import React, {useState} from 'react';
import styled from "styled-components"




const TodoForm = props =>{
    const [taskName1,setTaskName]=useState('');
     
    const addItem= e =>{
        setTaskName(e.target.value);
    };
     
     const handleSubmit= e => {
       e.preventDefault();
       props.handleChange(taskName1);
       e.target.reset();
       
     }
   
    

    return(
      <form onSubmit={handleSubmit}>
      
      <Input name="task" onChange={addItem}   placeholder="Add to the list" type="text"></Input>
      <Button type="submit" primary>Add</Button>
      <Button type="button">Clear Purchased</Button>
      </form>
    );
};

const Button= styled.button`
background: ${props=> props.primary ? 'lightblue' : 'white'};
font-size: 1em;
cursor: pointer;
 &:hover{
    box-shadow: 3px 3px 3px 3px  black;
 }


 
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const Input= styled.input`
  font-size: 1em;
`;


export default TodoForm;

