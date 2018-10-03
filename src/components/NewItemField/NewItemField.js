import React from 'react';
import './NewItemField.css';


const NewItemField = props =>{
    return(
        <div>
            <input className='input-field' type='text' />
            <button>Add Item</button>
        </div>
    )
}

export default NewItemField