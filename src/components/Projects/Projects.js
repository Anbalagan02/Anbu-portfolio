import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cng from "../../Assets/Projects/cng.jpg";
import netflix from "../../Assets/Projects/netflix.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Something that I 
        <strong className="purple">  build</strong>
        </h1>
        <p style={{ color: "white" }}>
        with love, expertise and pinch of magical ingredients.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cng}
              isBlog={false}
              title="CNG Calculator "
              description="This is simple  website  for CNG Calculator. It contains menu bar and little bit of css.Html, and python used to create the website"
              ghLink="https://github.com/Anbalagan02/cng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Ui Clone"
              description="This is  Netflix clone website and Html,css,js  used to create this page"
              ghLink="https://github.com/Anbalagan02/Netflix_Clone"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
