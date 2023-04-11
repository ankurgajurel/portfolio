import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiFlask,
  SiWordpress,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiGo
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiGo />
      </Col>
    </Row>
  );
}

export default Techstack;
