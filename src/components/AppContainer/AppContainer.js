import React from 'react';
import './AppContainer.css';
import InputContainer from '../InputContainer/InputContainer';
import ListContainer from '../ListContainer/ListContainer';



const AppContainer = props => {
    return (
        <div className='app-container'>
            <InputContainer onKeyPress={props.onKeyPress} changeHandler={props.changeHandler} addItemHandler={props.addItemHandler} newItemInput={props.newItemInput} />
            <ListContainer clearDoneItems={props.clearDoneItems} clearToDoItem={props.clearToDoItem} completeTaskHandler={props.completeTaskHandler} data={props.data} ReOpenTask={props.ReOpenTask} />
        </div>
    )
}

export default AppContainer;