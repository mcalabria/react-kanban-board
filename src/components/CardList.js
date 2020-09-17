import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import React from 'react'

const CardListItem = (props) => {
  return(
    <Paper elevation={3} style={{width: '100%'}}>
      {props.data.title}
      <Button onClick={props.onDelete}>Delete</Button>
    </Paper> 
  )
}

const newCard = function(listId) {
  console.log('Add new card handler called for list %s', listId)
}

const deleteCard = function(id) {
  console.log(id);
  console.log('card %s delete handler called', id);
}

export default function(props) {
  return (
    <Box border={1} borderRadius={16} display="flex" flexDirection="column" alignItems="stretch" padding={1} component="div" bgcolor="white">
      <Box component="h4" px={1} pt={0} m={0}>
        {props.title}
      </Box>
      <Divider />
      <List id={props.listId}>
        { props.cards.map((card) => {
            return (
              <ListItem key={card.id} disableGutters={true}>
                <CardListItem data={card} onDelete={() => deleteCard(card.id)}/>
              </ListItem>
            )
          })
        }
      </List>
      <Box component="div" display="flex" style={{cursor: 'pointer'}} onClick={() => newCard(props.id)}>
        <Avatar style={{width: '20px', height: '20px'}}>
          <AddIcon />
        </Avatar>
        <Box component="div" ml={1}><span>Add New Card</span></Box> 
      </Box>
    </Box>
  )
}