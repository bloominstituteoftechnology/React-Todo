import React from 'react';

class TodoForm extends React.Component {
    //constructor with state
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    //change handler
    handleChanges = e => {
        //updates the state with each keystroke
        this.setState({ item: e.target.value });
    };



}