import React from 'react';

function TodoForm(props){
    return (
        <div className='form-container'>
            <form onSubmit={props.addTask}>
            <div className='input-container'>
                <input 
                    className='form-input-content'
                    type="text"
                    name='inputText'
                    placeholder='...todo'
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <input 
                    className='form-input-content'
                    type="text"
                    name='inputFilterText'
                    placeholder='...filter'
                    value={props.inputFilterText}
                    onChange={props.handleChange}
                />
            </div>                
                <button className='button-content addBtn' type='submit'>Add Todo</button>
                <button className='button-content clearBtn' onClick={props.clearCompleted}>Clear Completed</button>
                <button className='button-content filterBtn' onClick={props.filterTasks}>Filter</button>
            </form>
        </div>
    );
}

export default TodoForm;