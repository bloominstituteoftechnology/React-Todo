import React from 'react';

class Form extends React.Component {

    state = {
        inputValue: ""

    }

    handleChange = (evnt) => {
        this.setState({ inputValue: evnt.target.value });
    }

    render() {
        return (
            <div className="Form">
                <form>
                    <input
                        onChange={(evnt) => this.handleChange(evnt)}
                        value={this.state.inputValue}
                    />
                </form>
            </div>
        );
    }
}

export default Form;
