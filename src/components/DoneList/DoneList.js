import React from 'react';
import './DoneList.css';
import Header from '../Header/Header';


const DoneList = props =>{
    return (
        <div>
            <div className='done-list-header'>
                <Header headerText='Finished Items:' />
                <button onClick={props.clearDoneItems} className='smallbtn'>Clear</button>
            </div>
            <div>
                {
                    props.data.map(element=>{
                        if(element.completed ===true){
                            return <p className='list-item completed-item' key={element.id}>{element.task}</p>
                        }
                    })
                }
            </div>
        </div>
    )
}
export default DoneList;