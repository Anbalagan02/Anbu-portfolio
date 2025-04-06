import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <p style={{ textAlign: "justify"  }}>
          My name is Anbalagan. I describe myself as a front end developer , who loves coding .
          
          <p>I’m Recently graduated from Tamil University with a degree in MSc Computer Science.  And my goal is to pursue this passion within the field of software engineering.  In my spare time, I enjoy contributing to open source projects.Web development has been a part of my interest and have a Constant urge to learn new technologies.</p>
          </p>
        </blockquote>
        <Row>
          <Col md={12} className="home-about-social">
            <p style={{ textAlign: "justify", fontSize:"23px" }}>I'm currently looking for full-time Software Engineering ! If you know of any positions available or if you have any questions, please feel free to contact me at below option.</p>
            
            
             <h1 style={{ fontSize: "2.7em", paddingBottom: "20px" , color:"purple",}}>
              Find me on 
             </h1>
            
                    
            <ul className="home-about-social-links">
             
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anbu002/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
             <a
                href="https://github.com/Anbalagan02/"
                target="_blank" 
                rel="noreferrer"
                className="icon-colour  home-social-icons">
                <AiFillGithub />
             </a>
             </li>

            </ul>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
