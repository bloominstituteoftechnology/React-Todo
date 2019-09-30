import React from 'react';

class AddForm extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.content)
        
        this.setState({
            content: ''
        }
        )
    }



    render() {
        return (
            <div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <input
                        id="outlined-name"
                        label="To-Do"
                        margin="normal"
                        value={this.state.content}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>
                        Add To-Do
                    </button>
                </form>
            </div>
        );
    }
}

export default AddForm;