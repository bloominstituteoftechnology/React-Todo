import React from 'react';
import './ListContainer.css';
import ToDoList from '../ToDoList/ToDoList';
import DoneList from '../DoneList/DoneList';


const ListContainer = props =>{
    return(
        <div className='list-container'>
            <div className='list-todo-list'>
                <ToDoList />
            </div>
            <div className='list-done-list'>
                <DoneList />
            </div>
        </div>
    )
}

export default ListContainer;