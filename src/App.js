import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // inporting bootstrap from react-bootstrap
import { SearchForm } from "./components/SearchForm";
import { Display } from "./components/Display";
import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovieToList = (movie) => {
    const tempArg = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempArg, movie]);
  };

  const handleOnDelete = (imdbID) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setMovieList(movieList.filter((item) => item.imbID !== imdbID));
    }
  };
  return (
    <div className="wrapper bg-dark text-danger">
      <Container>
        {/* title */}
        <Row>
          <Col>
            <h1 className="mt-5 text-center">My Movies Collection</h1>
          </Col>
        </Row>

        <hr></hr>

        {/* Form */}
        <SearchForm addMovieToList={addMovieToList} />

        <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
