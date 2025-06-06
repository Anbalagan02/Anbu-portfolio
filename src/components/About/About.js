import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./Aboutcard";
import laptopimg from "../../Assets/laptopimg.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className=" heading-emoji" style={{fontSize: "2.1em", paddingBottom: "20px" , color:"#68187a;"}}>
              Know Who I'M &#128512;
            </h1>
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "60px" , paddingLeft: "70px" }}
            className="about-img"
          >
            <img src={laptopimg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        
      </Container>
    </Container>
  );
}

export default About;
