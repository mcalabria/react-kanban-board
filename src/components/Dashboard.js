import React from 'react'
import CardList from './CardList.js'
import Grid from '@material-ui/core/Grid';
import TopAppBar from './TopAppBar'

export default function(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <TopAppBar></TopAppBar>
        </Grid>
        <Grid item xs={2}>
          <CardList title="Backlog" id={1} cards={props.cards.filter( (card) => card.status === 'backlog')}></CardList>    
        </Grid>
        <Grid item xs={2}>
          <CardList title="To Do" id={2} cards={props.cards.filter( (card) => card.status === 'todo')}></CardList>
        </Grid>
        <Grid item xs={2}>
          <CardList title="In Progress" id={3} cards={props.cards.filter( (card) => card.status === 'inprogress')}></CardList>
        </Grid>
        <Grid item xs={2}>
          <CardList title="Testing" id={4} cards={props.cards.filter( (card) => card.status === 'testing')}></CardList>
        </Grid>
        <Grid item xs={2}>
          <CardList title="Ready To Deploy" id={5} cards={props.cards.filter( (card) => card.status === 'readytodeploy')}></CardList>
        </Grid>
        <Grid item xs={2}>
          <CardList title="Released" id={6} cards={props.cards.filter( (card) => card.status === 'released')}></CardList>
        </Grid>
      </Grid>
    </div>
  )
}
