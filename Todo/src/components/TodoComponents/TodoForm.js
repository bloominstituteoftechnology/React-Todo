import React from 'react';
import styled from 'styled-components'
import Add from '../../img/add.png'


const FormStyle = styled.div `
width: 1162px;
height: 116px;
margin: 2% 0;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);


.addform{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    }

    input {
    display: flex;
    align-item: center;
    margin-left: 5%;
    margin-top: 3%;
    width: 20%;
    font-size: 1rem;
    font-family: HammerSmith One;
    }

.add-btn{
    width: 20px;
    height: 20px;
    padding: 1%;
}
button {
    background-color: white !important;
    border: none;
    cursor: pointer;
}
`

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    submitItem = e => {
        e.preventDefault(); 
        this.props.addItem(this.state.item)
    }
    render() {
        return (
            <FormStyle>
                
            <form className="addform" onSubmit = {this.submitItem}>
                <input 
                type="text"
                value={this.item}
                name="item"
                placeholder="Add task..."
                onChange={this.handleChanges}
                />
                <button><img className="add-btn" src={Add} alt="add"/></button>
            </form>
            </FormStyle>
        )
    }
}

export default ToDoForm;