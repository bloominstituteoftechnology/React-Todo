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
                <div className='btns'>
                    <button onClick={props.addItem} className='add-btn'>Add Todo</button>   
                    <button onClick={props.addItem}>Clear Completed</button> 
                </div>    
            </form> 
             
        </div>
         
    );
};

export default Form;