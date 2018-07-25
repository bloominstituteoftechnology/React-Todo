import React from 'react';

class Form extends React.Component {

    state = {
        inputValue: "Hello you"

    }

    handlechange = () => {
        console.log('changed');
    }

    render() {
        return (
            <div className="Form">
                <form>
                    <input

                        onChange={this.handleChange}
                        value={this.state.inputValue}
                    />
                </form>
            </div>
        );
    }
}

export default Form;
