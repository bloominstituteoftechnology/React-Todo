import React from 'react';
import styled from "styled-components"
import "./Todo.css"

const Todo =props =>{
    
   
    return(
    
        <Item  onClick={e=>props.togglePurchased(props.key)} value={ props.completed} >
            {props.task}
           
        </Item>

     
    ); 
};

const Item= styled.button`
margin: 1em;
padding: 0.25em 0.85em;
font-size: 1.3em;
border: 2px solid palevioletred;
border-radius: 10px;
background: ${props=> props.value ?  'white' : ' #e64944'};
text-decoration: ${props=> props.value ?  'line-through' : ' none'};
width: 20%;`;



export default Todo;