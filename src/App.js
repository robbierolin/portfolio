import React, { Component } from 'react';
import './App.css';
import Main from './components/main'

class App extends Component {

  render() {
    return (
      <div className='page'>
        {/*
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='headline' color='secondary'>
              Robbie Rolin
            </Typography>
          </Toolbar>
        </AppBar>
        */}
        <Main/>
      </div>
    );
  }
}

export default App;
