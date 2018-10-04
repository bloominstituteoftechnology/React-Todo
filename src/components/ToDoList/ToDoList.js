import React from 'react';
import './ToDoList.css';
import Header from '../Header/Header'


const ToDoList = props => {
    return (
        <div>   
            <div className='todo-header'>
                <Header headerText='To Do Items:'/>
                <button className='smallbtn' onClick={props.clearToDoItem}>Clear</button>
            </div>
            <div>
            {
                props.data.map(element=>{
                    if(element.completed ===false){
                        return <p onClick={props.completeTaskHandler} className='list-item finger' id={element.id} key={element.id}>{element.task}</p>
                    }
                })
            }
            </div>
        </div>
    )
}

export default ToDoList;