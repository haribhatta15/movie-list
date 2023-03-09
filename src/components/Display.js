import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomCard } from "./CustomCard";

export const Display = () => {
  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div className="">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">All</Button>
          <Button variant="info">Happy</Button>
          <Button variant="warning">Lazy</Button>
        </ButtonGroup>
      </div>

      <div className="py-3">0 movies found</div>
      <hr></hr>

      <Row>
        <Col className="d-flex justiy-content-around">
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};
