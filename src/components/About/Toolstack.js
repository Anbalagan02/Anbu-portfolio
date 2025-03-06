import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsWindows } from "react-icons/bs";

function Toolstack() {
  console.log("Toolstack rendered") 
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <BsWindows size={30} />
      </Col>
    </Row>
  );
}

export default Toolstack;
