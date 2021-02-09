import React from 'react';
import styled from 'styled-components';

export default class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
    }

    // handleChanges = e => {
    //     // update state with each keystroke
    //     this.setState({
    //       inputValue: e.target.value,
    //     });
    //   };

    // addClick = (evt, props) => {
    //     evt.preventDefault();
    //     const newItem = {
    //         task: this.state.inputValue.trim(),
    //         id: Date.now(),
    //         completed: false
    //     };

    //     this.setState({
    //         ...this.props.list,
    //         newItem
    //       });
    // }

    render() {
        return(
            <StyledFormContainer>
                <form>
                    <input
                    type='text'
                    name='toDoInput'
                    value={this.props.inputValue}
                    onChange={this.props.handleChanges}>
                    </input>

                    <button onClick={this.props.addNew}>Add To Do</button>
                    <button>Clear Completed</button>
                </form>
            </StyledFormContainer>
        );
    };
};

const StyledFormContainer = styled.div`
    border: solid 1px green;

    input {
        margin-right: 1%;
    }

    button {
        margin-right: 1%;
    }
`;