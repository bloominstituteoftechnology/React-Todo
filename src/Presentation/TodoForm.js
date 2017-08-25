import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export const TodoForm = (props) => {
  return(
    <div>
      <Typography 
        type="display3" 
        style={{ padding: '20px' }} 
      >
        Something New To Do...
      </Typography>
      <form 
        onSubmit={props.onSubmit} 
        style={{ padding: '20px' }}
      >
        <TextField 
          fullWidth 
          id='title' 
          label='Title' 
          value={props.title} 
          onChange={props.onChange}
        />
        <TextField 
          fullWidth 
          multiline
          style={{ paddingTop: '10px' }}
          rowsMax="20"
          id='description' 
          label='Description' 
          value={props.description} 
          onChange={props.onChange}
        />
        <Grid item style={{ paddingTop: '20px' }}>
          <Button raised color="accent" onClick={props.onSubmit} style={{width: '100%'}}>
            Save
          </Button>
          <Button 
            raised
            onClick={props.onCancel}
            style={{marginTop: '20px', width: '100%'}}
          >
            Cancel
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default TodoForm;
