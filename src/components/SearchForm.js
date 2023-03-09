// import React, { useRef, useState } from "react";
// import { Alert, Button } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { fetchMovies } from "../helper/fetchHelper";
import { CustomCard } from "./CustomCard";

export const SearchForm = () => {
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form>
        <Row className="gap-2">
          <Col md="8">
            <Form.Control placeholder="Search by name" />
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="danger">Search Movies</Button>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-5">
          <CustomCard />
        </div>
      </Form>
    </div>
  );
};
