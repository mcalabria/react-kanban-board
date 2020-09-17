import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Dashboard from './components/Dashboard.js';
import FluidContainer from './components/FluidContainer.js'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      cards: [
        {
          id: '1',
          title: 'Fix header',
          type: 'bugfix',
          desc: 'Fix this ASAP',
          status: 'backlog'
        },
        {
          id: '2',
          title: 'Add remember me to login',
          type: 'feature',
          desc: 'code this ASAP',
          status: 'backlog'
        },
        {
          id: '3',
          title: 'Add datepicker to sign up form',
          type: 'feature',
          desc: 'Code this ASAP',
          status: 'todo'
        },
        {
          id: '4',
          title: 'Add login to top bar',
          type: 'feature',
          desc: 'Code this ASAP',
          status: 'inprogress'
        },
        {
          id: '5',
          title: 'Fix landing page',
          type: 'bugfix',
          desc: 'Fix this ASAP',
          status: 'testing'
        }
      ]
    }
  }

  render() {
    return (
      <FluidContainer>
        <Box color="text-primary" mx={2}>
          <Dashboard cards={this.state.cards}></Dashboard>
        </Box>
      </FluidContainer>
    );
  }
}

export default App;
