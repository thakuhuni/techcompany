import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import { Typography } from '@mui/material';
import {Stack, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#2196f3',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
     // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});


export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

   async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.props.oktaAuth.signOut();
  }

  render() {
    let body = null;
    if (this.props.authState?.isAuthenticated) {
      body = (
        <div className="Buttons">
          <Button variant='contained' onClick={this.logout}>Logout</Button>
          {}
        </div>
      );
    } else {
      body = (
        
        <div className="Buttons">
          <Button variant='contained' onClick={this.login}>Login</Button>
        </div>
      );
    }

    return (
      
   //   <div className="App">
        
       // <header className="App-header">
       
         
      //  </header>
     // </div 
     <ThemeProvider theme = {theme}>
     <Stack spacing={4}>

      <Stack>
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <Typography variant='h1'> H1 Heading</Typography>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Some text of this page in future
          </a>
       
          {body}
      </Stack>

      <Stack>
        <Button variant='contained' color ='secondary'>Test</Button>
        </Stack>
     

      </Stack>
      </ThemeProvider>

    );
  }
});
