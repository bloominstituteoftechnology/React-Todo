import React from 'react';
import './DoneList.css';
import Header from '../Header/Header';


const DoneList = props =>{
    return (
        <div>
            <Header headerText='Finished Items:' />
            {
                props.data.map(element=>{
                    if(element.completed ===true){
                        return <p className='list-item completed-item' key={element.id}>{element.task}</p>
                    }
                })
            }
        </div>
    )
}
export default DoneList;