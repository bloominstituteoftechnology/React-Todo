import React from 'react'


class TodoForm extends React.Component {

    constructor() {

        super()
        this.state = {

        }
    }

    render() {
        return (

            <div className="form">

                <h2>Welcome to your Todo App!</h2>
                <form>
                    <input type="text" placeholder="Add new task here"></input>
                    <button type="submit">Add Todo</button>
                    <button type="submit">Clear completed</button>
                </form>

            </div>
        )


    }



}



export default TodoForm




