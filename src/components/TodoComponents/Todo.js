import React from 'react'


class Todo extends React.Component{

    constructor(){

        super()
        this.state = {
            todoItem: "buy bread"
        }
    }

    render(props) {
        return (

            <div className="todo-wrapper">
                <li>{this.state.todoItem}</li>
            </div>
        )
    }



}

export default Todo