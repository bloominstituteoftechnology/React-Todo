import React from 'react'
import { Button } from 'semantic-ui-react'

export default function DeleteAll( props) {
    return (
        <Button style={{ marginTop: "5%" }} onClick={props.handleCheckboxChange} color='teal'>Delete All</Button>
    )
}
{/* <Form onSubmit={this.handleCheckboxChange}>
<Form.Field>
  <Button >Clear List</Button>
</Form.Field>
</Form> */}