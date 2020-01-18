import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: 50px;
height: 23px;
border: 1px solid black;
`


class TodoForm extends React.Component {
constructor(props) {
    super(props);
    this.state= {
        itemText:"", 
    };
}
    changeHandler = event => {
        this.setState({ itemText: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({ itemTest: ""});
    };

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="itemText"
                    value={this.state.itemText}
                    onChange={this.changeHandler}
                />
                <Button type="submit"> Add </Button>

            </form>
        );
    }

}

    export default TodoForm