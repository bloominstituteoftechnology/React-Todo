import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form>
                <input type="text" name="newtodo" placeholder="Add a new todo" />
                <button type="submit">Add a new Todo</button>
            </form>
        )
    }
}

export default TodoForm;