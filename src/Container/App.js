/* eslint-disable */
import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Typography from 'material-ui/Typography'

import TodoForm from '../Presentation/TodoForm'
import TodosList from '../Presentation/TodosList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      title: '',
      description: '',
      items: []
    }
  }
  componentDidMount() {
    if (localStorage.state) {
      const existingState = JSON.parse(localStorage.state)
      this.setState(() => existingState)
    }
  }
  
  persistToLocalStorage = (state) => {
    localStorage.state = JSON.stringify(state || this.state)
  }

  drawerToggle = () => {
    const newState = Object.assign({}, this.state, {
      drawerOpen: !this.state.drawerOpen
    })
    this.setState(() => newState)
  }

  onRemove = (event) => {
    const items = Array.from(this.state.items)
    items.splice(event.currentTarget.name, 1)
    const newState = Object.assign({}, this.state, {items})
    this.persistToLocalStorage(newState)
    this.setState(() => newState)
  }
  
  onComplete = (event) => {
    const items= Array.from(this.state.items)
    const name = event.currentTarget.name
    items[name].isComplete = !items[name].isComplete
    const newState = Object.assign({}, this.state, {items})
    this.persistToLocalStorage(newState)
    this.setState(() => newState)
  }

  onChange = (event) => {
    const { name, value } = event.target
    const newState = Object.assign({}, this.state)
    newState[name] = value
    this.setState(newState)
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { title, description } = this.state
    const items = Array.from(this.state.items)
    items.push({ title, description, isComplete: false })
    const state = { drawerOpen: false, title: '', description: '', items }
    const newState = Object.assign({}, this.state, state)
    if (title) {
      this.persistToLocalStorage(newState)
      this.setState(() => newState)
    }
  }

  render() {
    const {title, description, drawerOpen, items} = this.state
    const {onChange, onSubmit, onComplete, onRemove, drawerToggle} = this
    return (
      <div>
        <Grid container justify="space-between" style={{marginTop: '1em'}}>
          <Typography type="display3" style={{marginLeft: '1em'}}>
            My To Do's...
          </Typography>
          <Grid item>
            <Button 
              fab 
              color="primary" 
              aria-label="add" 
              onClick={drawerToggle}
              style={{marginRight: '1em'}}
            >
              <AddIcon/>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TodosList 
              items={items}
              onRemove={onRemove}
              onComplete={onComplete}
            />
          </Grid>
        </Grid>
        <Drawer  
          open={drawerOpen} 
          onRequestClose={drawerToggle}
        >
          <TodoForm 
            onSubmit={onSubmit} 
            onChange={onChange}
            onCancel={drawerToggle}
            title={title}
            description={description}
          />
        </Drawer>
      </div>
    )
  }
}