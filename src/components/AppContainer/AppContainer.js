import React from 'react';
import './AppContainer.css';
import InputContainer from '../InputContainer/InputContainer';
import ListContainer from '../ListContainer/ListContainer';



const AppContainer = props => {
    return (
        <div className='app-container'>
            <InputContainer changeHandler={props.changeHandler} addItemHandler={props.addItemHandler} />
            <ListContainer clearDoneItems={props.clearDoneItems} clearToDoItem={props.clearToDoItem} completeTaskHandler={props.completeTaskHandler} data={props.data}/>
        </div>
    )
}

export default AppContainer;