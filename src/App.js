import React from 'react';
import {FlexColumn, FlexRow} from "./components/Elements/Flex";
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import uniqid from 'uniqid';
import Input from './components/Elements/Input'
import styled from 'styled-components'

const Container = styled(FlexColumn)`
    height: 100vh;
    width: 100vw;
    background: #e5e5e5;
`;

const Box = styled(FlexColumn)`
    background: white;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #00000024;
    margin: 20px 0;
`;

const Header = styled(FlexRow)`
    width: 100%;
    box-shadow: 0 4px 2px -2px #d8d8d8;
    padding: 10px;
    box-sizing: border-box;
`;

const Footer = styled(FlexRow)`
    width: 100%;
    box-shadow: 0 -5px 5px -4px #d8d8d8;
    padding: 10px;
    box-sizing: border-box;
`;

class App extends React.Component {
    constructor() {
        super();

        let list = window.localStorage.getItem('list');

        this.state = {
            list: list ? JSON.parse(list) : []
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

        window.localStorage.setItem('list', JSON.stringify(list));
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
        list[ind].completed = !list[ind].completed;
        this.setState({list: list});
    };

    handleSearch = e => {
        let list = window.localStorage.getItem('list');
        list = JSON.parse(list).filter(l => l.task.toLowerCase().includes(e.target.value));
        this.setState({list: list});
    };

    render() {
        const {list} = this.state;

        return (
            <Container alignCenter justifyCenter>
                <Box>
                    <Header alignCenter>
                        <Input fullWidth placeholder="Search" onChange={e => this.handleSearch(e)}/>
                    </Header>
                    <TodoList list={list} handleCompleted={id => this.handleCompleted(id)}/>
                    <Footer alignCenter>
                        <TodoForm handleClear={() => this.handleClear()}
                                  handleAdd={e => this.handleAdd(e)}
                        />
                    </Footer>

                </Box>

            </Container>
        );
    }
}

export default App;
