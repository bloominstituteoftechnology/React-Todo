import React from "react";

class TodoForm extends React.Component{
    state = {itemText: ""}

    onChangeHandler = (e) => {
        this.setState({
            itemText: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({ itemText: "" });
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.onSubmitHandler}>
                    <input
                        id = "addTodo"
                        name = "addTodo"
                        type = "text"
                        placeholder = "Enter your todo"
                        value = {this.state.itemText}
                        onChange = {this.onChangeHandler}
                    />
                    <div><button>Add todo</button></div>
                </form>
                <button onClick = {this.props.deleteItem}>Clear completed</button>
            </div>
        )
    }
}

export default TodoForm;