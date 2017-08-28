/* eslint-disable */
import React from 'react'
import List, { 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemSecondaryAction, 
  ListItemAvatar
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

export const TodosList = ({
  items, 
  onComplete,
  onRemove
}) => (
  <div>
    <List>
      {items.map(({title, description, isComplete}, i) => (
        <ListItem key={i}>
          {isComplete ? 
            <IconButton name={i} aria-label="Complete" onClick={onComplete}>
              <Icon color="primary">check_box</Icon>
            </IconButton>
            :
            <IconButton name={i} aria-label="Not Complete" onClick={onComplete}>
              <Icon color="primary">check_box_outline_blank</Icon>
            </IconButton>
          }
          <ListItemText 
            primary={`${i + 1}. ${title}`} 
            secondary={description} 
            style={isComplete ? {
              textDecoration: 'line-through',
              textDecorationColor: 'red',
              } : {}
            }
          />
          <ListItemSecondaryAction>
            <IconButton name={i} aria-label="Delete" onClick={onRemove}>
              <Icon color="error">delete</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </div>
)

export default TodosList