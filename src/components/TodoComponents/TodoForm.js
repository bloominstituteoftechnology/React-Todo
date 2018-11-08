import React from 'react';

const TodoForm = (props) =>{
    return(
        <div>
            <form action="">
                <input type="text" value={props.inputText} onChange={props.handler} onSubmit ={props.submit}/>
                <button>Add todo</button>
                <button>Clear Complete</button>
            </form>
        </div>
    );
};

export default TodoForm;