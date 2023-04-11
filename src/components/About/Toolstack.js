import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiLinuxmint,
  SiVisualstudiocode,
  SiCpanel,
  SiArchlinux,
  SiBrave,
  SiGit,
  SiGithub,
  SiGooglesheets
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinuxmint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCpanel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArchlinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBrave />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglesheets />
      </Col>
      
      
    </Row>
  );
}

export default Toolstack;
