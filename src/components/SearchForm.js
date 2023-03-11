// import React, { useRef, useState } from "react";
// import { Alert, Button } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { fetchMovies } from "../helper/fetchHelper";
import { CustomCard } from "./CustomCard";
import { useRef } from "react";

export const SearchForm = () => {
  const strRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const str = strRef.current.value;
    // call api and get the movie details
    fetch("http://www.omdbapi.com/?apikey=edec8d18&t=avatar")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    // if we have to call from another server then we need to get through api...
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row className="gap-2">
          <Col md="8">
            <Form.Control ref={strRef} placeholder="Search by name" />
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
