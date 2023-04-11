import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCardInstagram from "./ProjectCardsInstagram";
import Particle from "../Particle";
import nepse from "../../Assets/Projects/nepse-cli.png";
import ca from "../../Assets/Projects/ca.png";
import doppler from "../../Assets/Projects/doppler.png";
import findkathmandu from "../../Assets/Projects/findkathmandu.png";
import nestnepal from "../../Assets/Projects/nestnepal.png";
import nepalts from "../../Assets/Projects/nepalts.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://opengraph.githubassets.com/7afaa2712467598a654fdd2ae2f02e02a5cdabd8a8d06124be933ab1c909df9f/ankurgajurel/nepse-cli"}
              isBlog={false}
              title="nepse-cli"
              description="Simple CLI App implemented in Python that helps users to get data related to NEPSE"
              ghLink="https://github.com/ankurgajurel/nepse-cli"
              demoLink="https://github.com/ankurgajurel/nepse-cli"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={findkathmandu}
              isBlog={false}
              title="Find Kathmandu"
              description="A brand that posts content related to travel and history. A website is live too. You can find the brand on socials like YouTube, Instagram, Facebook also."
              igLink="https://instagram.com/findkathmandu"
              demoLink="https://findkathmandu.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={nepalts}
              isBlog={false}
              title="Nepal Trade Solutions"
              description="A Procurement and Sourcing Company in Nepal"
              igLink="https://instagram.com/nepal_tradesolutions"
              demoLink="https://nepalts.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nestnepal}
              isBlog={false}
              title="Nest Nepal Blogs"
              description="Content related to web hosting, servers and VPSs."
              ghLink="https://github.com/Nest-Nepal"
              demoLink="https://nestnepal.com/author/ankurgajurel02"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ca}
              isBlog={false}
              title="Copyassignment Blogs"
              description="Blog content on Python Programming targeting beginners with modules like Selenium, PyGame, Turtle, etc"
              ghLink="https://github.com/copyassignment"
              demoLink="https://copyassignment.com/author/ankur" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={doppler}
              isBlog={false}
              title="The Doppler Deck"
              description="A very small initiave for STEM - realted content"
              igLink="https://instagram.com/thedopplerdeck"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doppler}
              isBlog={false}
              title="Programming Content"
              description="Designs related to content on programming and tech as a whole"     
              ghLink="https://github.com/ankurgajurel"
              demoLink="https://docs.google.com/spreadsheets/d/1AxSZf2wJTAb8WYmpwUHO_hNXBraaZCwFeLf8dgq5_Sk/edit?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
