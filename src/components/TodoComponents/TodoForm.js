import React from 'react'


class TodoForm extends React.Component {

    constructor() {

        super()
        this.state = {
          

        }
    }

    render(props) {

        const addItem = (item) => {
         /* ???
            React.setState(
                ...this.state.items,
                ["one", "two", "three"]
            ) */
        
          console.log(props)
          return this.state.items 
        }

        return (

            <div className="form">

                <h2>Welcome to my Todo App!</h2>
                <form onSubmit={addItem()}>
                    <input type="text" placeholder="Add new task here"></input>
                    <button type="submit">Add Todo</button>
                    <button type="submit">Clear completed</button>
                </form>

            </div>
        )


    }



}



export default TodoForm




