import React from 'react';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" name="" id="" placeholder="...todo" />
                    <input type="button" value="Add Todo" />
                    <input type="button" value="Clear Completed" />
                </form>
            </div>
        );
    }
}
export default TodoForm;