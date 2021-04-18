import React from 'react';
import {Navbar} from 'react-bootstrap'
import Login from './components/Login';

function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>{' '}
      Superhero Predictor
    </Navbar.Brand>
  </Navbar>
    <Login />
    </>
  );
}

export default App;