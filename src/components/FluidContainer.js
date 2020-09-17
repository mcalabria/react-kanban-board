import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <Container maxWidth={false}>
        <Typography component="div" style={ {background: 'blue', height: '100vh'} }>
          {props.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}