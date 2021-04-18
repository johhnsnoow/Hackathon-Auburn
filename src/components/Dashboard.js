import React from 'react'
import { Card, Button} from 'react-bootstrap'
const Dashboard = (props) => {
    const { profileObj } = props.response;
    const handleLogout = event => {
        props.onchange('');
    }
    return (
      <a href="hero.html">Start the prediction</a>
  );
}

export default Dashboard
