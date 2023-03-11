import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = () => {
  return (
    <Card style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="info">Happy</Button>
          <Button variant="warning">Lazy</Button>
        </div>
        <div className="d-grid">
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
