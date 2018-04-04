import React, {Component} from 'react';
import Todo from "./Todo";



class TodoList extends Component {
    constructor() {
        super();
    }

     Button = () => {
        return (
            <div>
                <input className="input" type="text" placeholder="Time"/>
                <input className="input" type="text" placeholder="Todo"/>
                <button className="submit center">ADD</button>
            </div>
        )
    }

    render() {
        return(
            <div className="container">
                <Todo />
                <this.Button/>
            </div>
        )
    }

}


export default TodoList;