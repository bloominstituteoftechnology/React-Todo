// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            item: "",
        }
    };
    render() {
        // console.log(this.state.items)
        return (
            <div className="wrapper">
                <h1>This is an awesome ToDo List!</h1>
                <h6>Did you complete a Todo? Congrats! Simply click on it to make it disappear!</h6>
                <input
                    name="item" // should be known as the state.value of the thing we update
                    onChange={this.handleNewItem}
                    value={this.state.item} // should be bound to the state.value of thing we update
                    placeholder="Want to add an Item?"
                />
                <button className="btn btn-primary" onClick={this.handleItemSubmition}>Yes Please!</button>
                <div>{this.state.items.map((todo, i) => {
                    // console.log(todo);
                    return <Todo key={i} todo={todo.item} text={todo.item} />
                }
                )}
                </div>
            </div>
        )
    }
    handleNewItem = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }
    handleItemSubmition = () => {
        const items = this.state.items;
        const item = { item: this.state.item, id: this.state.item + items.length }
        items.push(item)
        this.setState({ items: items, item: "" })
    }
}
// const TodoList = props => {
//     console.log(props)
//     return (
//         <div className="List">
//             <Todo items={props.items} />
//         </div>
//     )
// }

export default TodoList;