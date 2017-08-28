/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Drawer from 'material-ui/Drawer'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

export const TodoForm = ({
  title, 
  description, 
  onChange, 
  onSubmit, 
  onCancel
}) => (
  <div>
    <Typography 
      type="display3" 
      style={{ padding: '20px' }} 
    >
      Something New To Do...
    </Typography>
    <form 
      onSubmit={onSubmit} 
      style={{ padding: '20px' }}
    >
      <TextField 
        fullWidth 
        name='title' 
        label='Title' 
        value={title} 
        onChange={onChange}
      />
      <TextField 
        fullWidth 
        multiline
        style={{ paddingTop: '10px' }}
        rowsMax="20"
        name='description' 
        label='Description' 
        value={description} 
        onChange={onChange}
      />
      <Grid item style={{ paddingTop: '20px' }}>
        <Button raised color="accent" onClick={onSubmit} style={{width: '100%'}}>
          Save
        </Button>
        <Button 
          raised
          onClick={onCancel}
          style={{marginTop: '20px', width: '100%'}}
        >
          Cancel
        </Button>
      </Grid>
    </form>
  </div>
)

export default TodoForm
