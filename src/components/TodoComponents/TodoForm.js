import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Form, Button } from 'semantic-ui-react'
const ToDoForm = props => (
    <Container>
        <Form onSubmit={props.submit}>
            <Form.Field>
                <label>Your Task</label>
                <input type="text" placeholder="What is your To Do?" name="item" onChange={props.setData} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            <Button onClick={props.clear}>Clear Tasks</Button>
        </Form>
    </Container>
    // <div>
    //     <form onSubmit={props.submit}>
    //         <input type="text" placeholder="What is your To Do?" name="item" onChange={props.setData} />
    //         <input type="submit" value="Add To List" />
    //         <button onClick={props.clear}>Clear To Do</button>
    //     </form>
    // </div>
)

export default ToDoForm;