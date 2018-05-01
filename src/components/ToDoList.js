import React from 'react'

const ToDoList = props =>{
    return(
        <ul> 
            {
                 props.boo.map(char => {
                     let test = char.id;
                     return <li id = {char.id} key ={char.id} onClick={
                         function(){
                             if(char.bool === false){
                                char.bool = true;
                                document.getElementById(test).style.textDecoration = "line-through";
                             }
                             else{
                                char.bool = false;
                                document.getElementById(test).style.textDecoration = "none";
                             }
                         }
                     }>{char.name}</li>; 
                 })
            }
        </ul>
    )
}

export default ToDoList;