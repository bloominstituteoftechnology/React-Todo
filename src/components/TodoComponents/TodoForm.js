import React from 'react';
 
class TodoForm extends React.Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }
 
    handleChange = (e) => {
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }
 
    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";
        
        //Updating local component state
        this.setState({value:""});
    }
 
    addTodo = () => {
        //Call method reference in Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }
 
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}
 
export default TodoForm;