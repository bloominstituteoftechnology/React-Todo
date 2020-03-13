import React from 'react';
import Todo from "./Todo";
import styled from "styled-components";



const TodoList = ({list, togglePurchased}) =>{
    return(
      <ItemWrap>
     {list.map(i=>
      <Todo key={i.id} task={i.task} completed={i.completed}  togglePurchased={togglePurchased} /> 
      
     )}
     </ItemWrap>
    
     
    ); 
};
const ItemWrap=styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap : wrap;
`;


export default TodoList;