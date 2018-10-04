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
                        return (
                                <div>
                                    <p onClick={props.completeTaskHandler} className='slide-image-right list-item finger' id={element.id} key={element.id}>{element.task}</p>
                                </div>
                               )
                    }

                    return (<div></div>)
                    
                })
            }
            </div>
        </div>
    )
}

export default ToDoList;