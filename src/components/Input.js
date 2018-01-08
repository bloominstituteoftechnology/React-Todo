import React from 'react';

const Input = props => {
    return (
        <div> 
            <input type='text' value={props.newItem} onChange={props.changeHandler} />
            <button onClick={props.addItemHandler}> Add To-Do Item </button>
            <ul>
                {props.items.map((item, i) => {
                    return <li key={i} onClick={props.strikeThrough}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default Input;