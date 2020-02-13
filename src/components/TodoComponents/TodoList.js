import React from 'react'


class TodoList extends React.Component{

    constructor(){

        super()
        this.state = {
            items: ["dog", "cat", "elephant"]
        }
    }

    render(props) {
        return (

            <div className="todolist-wrapper">
                <ul>
                    <li>delete this item later</li>
                    { 
                    this.state.items.map(item => <li>{item}</li>)
                                        
                    }
                   

                    
                </ul>
            </div>
        )
    }



}

export default TodoList