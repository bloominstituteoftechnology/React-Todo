import React from 'react';

const Form = (props) => {
    return (
        <div className='input'>
            <form >
                <input
                    type='text'
                    name='inputText'
                    placeholder='ADD NEW ITEM'
                    value= {props.inputText}   //value attribute added so that the 'this.stae controls the data and not the input            
                    onChange={props.handleChange} 
                />   
                <button onClick={props.addItem} className='add-btn'>Add</button>   
                <button onClick={props.addItem}>Clear</button>     
            </form> 
             
        </div>
         
    );
};

export default Form;