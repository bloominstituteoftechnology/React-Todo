import React from 'react';

class FormComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
          
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event){
        this.setState({value: event.target.value});
    };

    handleSubmit(event) {
        alert('Task ' + this.state.value + ' was added!');
        event.preventDefault();
    };

    handleClear = () => alert('Task cleared!');

    render() {
        console.log(this.state)
        return (
            <div className="FormComponent">
                <form onSubmit={this.handleSubmit}>
                    {/* Input field */}
                    <input type="text" 
                    value={this.state.value} 
                    placeholder="Add a task" 
                    onChange={this.handleChange} />
                    {/* Buttons */}
                    <button onClick={this.handleSubmit}>Add Todo</button>
                    <button onClick={this.handleClear}>Clear Completed</button>
                </form>
            </div>
        );
    }
};

export default FormComponent;