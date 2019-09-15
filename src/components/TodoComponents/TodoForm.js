import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            newtodo: ""
        };
    }

    //will set this.state.newtodo equal to whatever text is currently in the input field.
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }); //sets newtodo: to the value entered in the input field
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newtodo);
        this.setState({newtodo: ""})
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input type = "text" 
                       name = "newtodo" //same name as the state variable
                       placeholder = "Enter an item to add to your list"

                       //You can control an <input />‘s text by setting its value attribute.
                       //any time a user updates <input />, the new text is immediately stored in Input‘s state
                       value = {this.state.newtodo}

                       onChange = {this.handleChange}/>

                <button type = "submit">Add Todo</button>

                <button onClick = {this.props.filterCompleted}> Clear Completed </button>

            </form>

        );

        
        
    }
}

export default TodoForm;