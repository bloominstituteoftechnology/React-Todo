import React, { Component } from 'react';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                        {
                            task: 'Organize Garage',
                            id: 1,
                            completed: false
                        },
                        {
                            task: 'Bake Cookies',
                            id: 2,
                            completed: false
                        }
            ]
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}



export default TodoList; 
