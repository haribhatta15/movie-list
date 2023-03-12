import { useState } from "react";
import { useRef } from "react";

import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CustomCard } from "./CustomCard";
import { fetchMovies } from "../helper/fetchHelper";

export const SearchForm = () => {
  const strRef = useRef("");
  const [searchedMovie, setSearchMovie] = useState({});

  const [error, setError] = useState("false");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const str = strRef.current.value;
    // call api and get the movie details
    const data = fetchMovies();
    if (data.Response === "True") {
      setSearchMovie(data);
    } else {
      setError();
    }
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
          {error ? (
            <Alert variant="danger">Movies Not Found</Alert>
          ) : (
            <CustomCard />
          )}
        </div>
      </Form>
    </div>
  );
};
