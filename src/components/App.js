import React from 'react';
import TodoList from './ToDo';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Panel from 'react-bootstrap/lib/Panel';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const newItem = {
            value: this.state.value,
            id: this.state.items.length + 1
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
    render() {
        return (
            <Panel header="To Do List" bsStyle="default">
                <Form inLine onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formInlineName">
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter Item"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" bsStyle="primary">Enter To Do Item</Button>
                </Form>
                <TodoList items={this.state.items} />
            </Panel>
        );
    }
}

export {App};