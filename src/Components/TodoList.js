import React, {Component} from 'react';
import Todo from "./Todo";

const Button = () => {
    return (
        <div>
            <input className="submit center" type="text"/>
            <button className="submit center">ADD</button>
        </div>
    )
}


class TodoList extends Component {
    constructor() {
        super();
    }

    buttonHandler() {

    }
    render() {
        return(
            <div className="container">
                <Todo />
                <Button/>
            </div>
        )
    }

}


export default TodoList;