import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/main-img.png.jpg";
import "../style/About.css";

function About(){
    return (
    //About section starts here
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                About Arevik Abrahamyan
                </Card.Title>
                <Card.Text>
         Arevik Abrahamyan a girl from foreign contry moved to States to make her dreams come true and for better future.Coming from an economist background  I never thought I will learn coding and coding will help me to dream big and work harder. I am flued by  curiosity and genuie desire to do more I commited myself to mastering coding in Full-Stack Developer Coding Bootcamp regardless of the chanalges I faced.        
         </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    )
}

// Export About
export default About;