// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from 'react';

class ToDoList extends React.Component {
	constructor() {
        super();
        
        this.state = {
            // something
        }
    }

    render() {
        return (
            <div>
                {/* something */}
            </div>
        );
    }
}

export default ToDoList;
