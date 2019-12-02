import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render (props) {
        return(
            <>
            <form>
                <input type='text' name='todo-text' placeholder='New Todo'>
                
                </input>

                <button onClick={this.props.add}>Add todo</button>
                <button>Clear completed</button>
            </form>
            </>
        )
    }
}