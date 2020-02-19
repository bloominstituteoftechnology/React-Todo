import React from 'react';
import TodoList from './TodoComponents/TodoList';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newState: [],
            changed: false 
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    changeHandler = (event) => {

        this.newState = this.props.chores.filter(chore => {
            return chore.name.toLowerCase().includes(event.target.value.toLowerCase());
        })

        this.changed = true;

        console.log(this.newState);
        console.log(this.changed);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="Search" onChange={this.changeHandler} />
                </form>
                {!this.changed && <TodoList 
                toggleItem={this.props.toggleItem}
                chores={this.state.newState}
                clearCompleted={this.props.clearCompleted}/>}
            </div>
        );
    }
}

export default SearchForm;