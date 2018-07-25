import React from 'react';

class Form extends React.Component {

    handleChange = (evnt) => {
        this.setState({ inputValue: evnt.target.value });
    }

    render() {
        return (
            <div className="Form">
                <form>
                    <input
                        onChange={(evnt) => this.props.handleChange(evnt)}
                        value={this.props.inputValue}
                    />
                </form>
            </div>
        );
    }
}

export default Form;
