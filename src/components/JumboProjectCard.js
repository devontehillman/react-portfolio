import React from "react";
//import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

function JumboProjectCard(props) {
    return (
        <Col md={12}>
            <Card style ={{ Margin : '10px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default JumboProjectCard;