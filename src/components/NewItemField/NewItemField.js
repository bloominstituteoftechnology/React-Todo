import React from 'react';
import './NewItemField.css';


const NewItemField = props =>{
    console.log('props NewItem - ', props)
    return(
        <div>
            <input onChange={props.changeHandler} className='input-field' type='text' />
            <button onClick={props.addItemHandler}>Add Item</button>
        </div>
    )
}

export default NewItemField