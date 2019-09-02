// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
    constructor(props) {
        super(props);//super calls the constructor of the class that we are inheriting from

        console.log("todolist props", props);
    }

    render() {
        return (
            <div>
                {/*whenever we do a map we need a unique value/key for each one of these items/todos */}
                {this.props.todos.map(todo => 
                    <Todo key = {todo.id} todo = {todo} toggleCompleted = {this.props.toggleCompleted}/>)}

            </div>

        );
    }

}

export default TodoList;