import React from "react";
//import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

function EmployeeCard(props) {
    return (
            <Col md={4}>
                <Card>
                    <Card.Header>Title</Card.Header>
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>Role:</Card.Text>
                        <Card.Text>Age:</Card.Text>
                        <Card.Text>ID:</Card.Text>
                        <Card.Text>Email:</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>
    );
}

export default EmployeeCard;