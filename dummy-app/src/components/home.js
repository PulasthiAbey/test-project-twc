import React from "react";

import "../styles/home.css";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={7} className="col-left">
          (wider)
        </Col>
        <Col className="col-right" xs={5}></Col>
      </Row>
    </Container>
  );
}

export default home;
