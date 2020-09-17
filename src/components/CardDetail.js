import React from 'react'
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core';

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       data: props.data
    }
  }

  render() {
    return(
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" component="h1">
            {this.state.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => {alert('hello!')}} variant="contained" color="primary">
            {this.state.title}
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default  CardDetail