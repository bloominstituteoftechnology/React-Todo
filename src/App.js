import React from 'react';
import {FlexColumn} from "./components/Elements/Flex";
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import uniqid from 'uniqid';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            list: []
        }
    }

    handleAdd = e => {
        e.preventDefault();
        let list = this.state.list;

        list.push({
            id: uniqid(),
            task: e.currentTarget.querySelector('input').value,
            completed: false
        });

        this.setState({list: list});
    };

    handleDelete = id => {
        let list = this.state.list, ind = list.findIndex(l => l.id === id);
        list.splice(ind, 0);
        this.setState({list: list});
    };

    handleClear = () => {
        let list = this.state.list;

        list = list.filter(l => !l.completed);

        this.setState({list: list});
    };

    handleCompleted = id => {
        let list = this.state.list, ind = list.findIndex(l => l.id === id);
        list[ind].completed = true;
        this.setState({list: list});
    };

    render() {
        const {list} = this.state;

        return (
            <FlexColumn>
                <TodoList list={list} handleCompleted={id => this.handleCompleted(id)}/>
                <TodoForm handleClear={() => this.handleClear()}
                          handleAdd={e => this.handleAdd(e)}
                />
            </FlexColumn>
        );
    }
}

export default App;
