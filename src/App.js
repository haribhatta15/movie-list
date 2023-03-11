import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // inporting bootstrap from react-bootstrap
import { SearchForm } from "./components/SearchForm";
import { Display } from "./components/Display";

import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
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
        <SearchForm />

        <Display />
      </Container>
    </div>
  );
}

export default App;
