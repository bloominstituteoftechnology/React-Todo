import React from 'react';
import Header from '../Header/Header';
import './InputContainer.css';
import NewItemField from '../NewItemField/NewItemField';


const InputContainer = props =>{
    return (
        <div className='input-container'>
            <Header headerText='Add New Item' />
            <NewItemField onKeyPress={props.onKeyPress} changeHandler={props.changeHandler} addItemHandler={props.addItemHandler} />
        </div>
    )
}

export default InputContainer;