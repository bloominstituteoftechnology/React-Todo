import React from 'react'

const items = [
    {
        name: "go for a stroll",
        id: "1",
        purchased: false

    },
    {
        name: "buy bread",
        id: "2",
        purchased: false

    },
    {
        name: "go home",
        id: "3",
        purchased: false

    },

]
class TodoList extends React.Component {

    constructor() {

        super()
        this.state = {
            items // we can also use "items" when the key and the value are identical instead of "items: items"
        }
    }

    render(props) {
        return (

            <div className="todolist-wrapper">
                <ul>
                    <li>delete this item later</li>
                    {
                        this.state.items.map(item => <li key={item.id}>{item.name}</li>)

                    }



                </ul>
            </div>
        )
    }



}

export default TodoList