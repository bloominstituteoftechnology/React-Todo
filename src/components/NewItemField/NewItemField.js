import React from 'react';
import './NewItemField.css';


const NewItemField = props =>{
    return(
        <div>
            <input onChange={props.changeHandler} className='input-field' type='text' />
            <button className='smallbtn' onClick={props.addItemHandler}>Add Item</button>
        </div>
    )
}

export default NewItemField