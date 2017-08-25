/* eslint-disable */
import React from 'react';
import List, { 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListItemSecondaryAction, 
  ListItemAvatar
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

export const TodosList = (props) => {
  return(
    <div>
      <List>
        {props.items.map((item, i) => (
          <ListItem key={i}>
            {item.isComplete ? 
              <IconButton id={i} aria-label="Complete" onClick={props.onComplete}>
                <Icon color="primary">check_box</Icon>
              </IconButton>
              :
              <IconButton id={i} aria-label="Complete" onClick={props.onComplete}>
                <Icon color="primary">check_box_outline_blank</Icon>
              </IconButton>
            }
            <ListItemText 
              primary={item.title} 
              secondary={item.description} 
              style={item.isComplete ? {
                textDecoration: 'line-through',
                textDecorationColor: 'red',
                } 
                : 
                {}
              }
            />
            <ListItemSecondaryAction>
              <IconButton id={i} aria-label="Delete" onClick={props.onRemove}>
                <Icon color="error">delete</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodosList;