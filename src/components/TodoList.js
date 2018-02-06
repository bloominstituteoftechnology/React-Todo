import React from 'react';

class TodoList extends React.Component {
    state = {
        items: [],
    }

    addItem(event) {
        this.setState({items: event.target.value});
    }
}