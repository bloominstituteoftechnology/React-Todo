import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    render() {

        return(
            <form>
                <input
                type='text'
                name='text'
                placeholder='add new Todo...'
                />
                <button>Add</button>
            </form>
        )
    }
}




export default TodoForm