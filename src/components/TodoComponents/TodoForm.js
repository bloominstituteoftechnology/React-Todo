import React from 'react';

function TodoForm(props){
    return (
        <div>
            <form>
                <input 
                type="text"
                name='inputText'
                placeholder='...todo'
                />
                <button>Add Todo</button>
                <button>Clear Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;