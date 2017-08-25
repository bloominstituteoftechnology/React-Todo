/* eslint-disable */
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';

import TodoForm from '../Presentation/TodoForm'
import TodosList from '../Presentation/TodosList'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      title: '',
      description: '',
      items: []
    };
  }
  componentWillMount() {
    if (localStorage.state) this.setState(JSON.parse(localStorage.state));
  }
  
  persistToLocalStorage = (state) => {
    localStorage.state = JSON.stringify(state || this.state);
  }

  handleDrawerToggle = () => {
    const newState = Object.assign({}, this.state, {
      drawerOpen: !this.state.drawerOpen
    })
    this.setState(() => newState);
  }

  handleItemDelete = (event) => {
    event.preventDefault();
    if (event.currentTarget.id) {
      const items = this.state.items;
      items.splice(event.currentTarget.id, 1);
      const newState = Object.assign({}, this.state, {items});
      this.setState(() => newState);
      this.persistToLocalStorage();
    }
  }
  
  handleItemCompleteToggle = (event) => {
    event.preventDefault();
    if (event.currentTarget.id) {
      const items= Array.from(this.state.items)
      const target = event.currentTarget.id
      items[target].isComplete = !items[target].isComplete;
      const newState = Object.assign({}, this.state, {items});
      this.setState(() => newState);
      this.persistToLocalStorage();
    }
  }
  
  handleItemIncomplete = (event) => {
    event.preventDefault();
    if (event.currentTarget.id) {
      const items= Array.from(this.state.items)
      items[event.currentTarget.id].isComplete = true;
      const newState = Object.assign({}, this.state, {items});
      this.setState(() => newState);
      this.persistToLocalStorage();
    }
  }

  onChange = (event) => {
    event.preventDefault();
    if (event.target.id) {
      const newState = Object.assign({}, this.state);
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const items = Array.from(this.state.items);
    items.push({ title, description, isComplete: false })
    const state = { drawerOpen: false, title: '', description: '', items };
    const newState = Object.assign({}, this.state, state);
    this.persistToLocalStorage(newState);
    if (title) this.setState(() => newState);
  }

  render() {
    return (
      <div>
        <Grid container justify="space-between" style={{marginTop: '20px'}}>
          <Typography type="display3" style={{marginLeft: '50px'}}>
            My To Do's...
          </Typography>
          <Grid item>
            <Button 
              fab 
              color="primary" 
              aria-label="add" 
              onClick={this.handleDrawerToggle}
              style={{marginRight: '50px'}}
            >
              <AddIcon/>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TodosList 
              items={this.state.items}
              onRemove={this.handleItemDelete}
              onComplete={this.handleItemCompleteToggle}
            />
          </Grid>
        </Grid>
        <Drawer  
          open={this.state.drawerOpen} 
          onRequestClose={this.handleDrawerToggle}
        >
          <TodoForm 
            onSubmit={this.onSubmit} 
            onChange={this.onChange}
            onCancel={this.handleDrawerToggle}
            title={this.title}
            description={this.description}
          />
        </Drawer>
      </div>
    );
  }
}