import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form>
                <input 
                    placeholder="todo"/>
                <button>Add Todo</button>
                <button>Clare Completed</button>
            </form>
        )        
    }
}

export default TodoForm;