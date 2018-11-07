import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form>
                <input 
                    type="text"  
                    name="inputText"
                    value={props.inputText} 
                    onChange={props.handleChange}
                />

                <button>I'm a button!</button>
            </form>
        </div>
    );
};

export default TodoForm;