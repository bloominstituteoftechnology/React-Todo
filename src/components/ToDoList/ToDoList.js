import React from 'react';
import './ToDoList.css';
import Header from '../Header/Header'


const ToDoList = props => {
    return (
        <div>   
            <Header headerText='To Do Items:'/>
            {
                props.data.map(element=>{
                    if(element.completed ===false){
                        return <p onClick={props.completeTaskHandler} className='list-item finger' id={element.id} key={element.id}>{element.task}</p>
                    }
                })
            }
        </div>
    )
}

export default ToDoList;