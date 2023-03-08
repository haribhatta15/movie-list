import logo from "./logo.svg";
import "./App.css";
import { SearchForm } from "./components/SearchForm";

import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="wrapper bg-dark text-primary">
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5 text-center">My Movies Collection</h1>
          </Col>
        </Row>

        <hr></hr>

        {/* Form */}
        <SearchForm />
      </Container>
    </div>
  );
}

export default App;
