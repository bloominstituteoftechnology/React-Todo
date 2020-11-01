import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <form>
                <input type="text" name="todo" />
                <button>Add Todo Item</button>
            </form>
        )
    }
    

}

export default TodoForm