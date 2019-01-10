import React from 'react';
import IconButton from '../GenericComponents/IconButton';

import './TodoListItemForm.css';

/*
    PASSABLE PROPS:
    onSubmit: The method to pass the form details to on submission.
*/

class TodoListItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };
    }

    modifyName(event) {
        let newState = this.state;
        newState.name = event.target.value;
        this.setState(newState);
    }

    modifyDescription(event) {
        let newState = this.state;
        newState.description = event.target.value;
        this.setState(newState);
    }

    submit() {
        let todoItem = this.state;
        this.props.onSubmit(todoItem);
        this.setState({
            name: "",
            description: ""
        });
    }

    render() {
        let body = null;
        if (this.state.name !== "") 
            body = (
                <div className="todolistapp-itemform-body">
                    <hr className="todolistapp-itemform-body-hr" />
                    <input 
                        className="todolistapp-itemform-description" type="text" name="name" value={this.state.description} 
                        placeholder="Describe your Todo in more detail..." onChange={this.modifyDescription.bind(this)} 
                    />
                    <div className="todolistapp-itemform-body-footer">
                        <IconButton icon={ <i className="fas fa-angle-right"></i>} label="submit" onClick={_ => this.submit()}/>
                    </div>
                </div>
            );

        return (
            <div className="todolistapp-itemform">
                <div className="todolistapp-itemform-header">
                    <input 
                        className="todolistapp-itemform-name" type="text" 
                        name="name" value={this.state.name} placeholder="New Todo..." 
                        onChange={this.modifyName.bind(this)} 
                    />
                </div>
                {body}
            </div>
        );
    }
}

export default TodoListItemForm;
