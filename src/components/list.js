import React from 'react'

const List = props =>{
    return(
        <ul> 
            {
                 props.hold.map(item => {
                     let Id = item.id;
                     return <li id={item.id} key ={item.id} onClick={
                         function(){
                             if(item.bool === false){
                                item.bool = true;
                                document.getElementById(Id).style.textDecoration = "line-through";
                             }
                             else{
                                item.bool = false;
                                document.getElementById(Id).style.textDecoration = "none";
                             }
                         }
                     }>{item.name}</li>; 
                 })
            }
        </ul>
    )
}

export default List; 