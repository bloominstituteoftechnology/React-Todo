import React from 'react'

const DisplayList = (props) => {
    return (
        <ul>
            {props.toDoList.map(item => {
                return <li key={item.id}> {item.name} 
                    <button  name="contact" value="completed" onClick = {this.complete}>Completed</button>
                </li>;    
            })}             
        </ul>
        );
        
};

export default DisplayList;