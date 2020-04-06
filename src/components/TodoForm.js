import React from 'react';

export default class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }    
    }
    render() {
        return (<form>
            <input
                type='text'
                value={this.state.item}
                name='item'
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
        </form>
        )  
    }
}
