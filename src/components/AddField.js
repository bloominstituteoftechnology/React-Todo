import React from "react"

const AddField = (props) => <input
  name={props.name}
  onChange={props.onChange}
  value={props.value}
  placeholder="New Task"
/>

export default AddField;