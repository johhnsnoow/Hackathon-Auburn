import React from 'react'
import { Card, Button} from 'react-bootstrap'
const Dashboard = (props) => {
    const { profileObj } = props.response;
    const handleLogout = event => {
        props.onchange('');
    }
    return (
        <div className="login-wrapper">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={profileObj.imageUrl} />
        <Card.Body>
          <Card.Title>{profileObj.name}</Card.Title>
        </Card.Body>
      </Card>
      <Button variant="danger" onClick={handleLogout}>
          Logout
          </Button>
      </div>
    );
}

export default Dashboard
