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

                            return(
                                    <div>
                                        <div className='completed-container'>
                                            <img className='checkmark slide-image-right' src={require('../../img/a.jpeg')} alt='checkmark'></img>
                                            <p className='slide-image-left list-item completed-item finger' id={element.id} key={element.id} onClick={props.ReOpenTask}>{element.task}</p>
                                        </div>

                                    </div>
                                )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default DoneList;