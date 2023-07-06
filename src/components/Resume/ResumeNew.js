import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

import ResumePDF from "../../Assets/ankurgajurel-resume.pdf"

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={ResumePDF}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"https://docs.google.com/spreadsheets/d/1AxSZf2wJTAb8WYmpwUHO_hNXBraaZCwFeLf8dgq5_Sk/edit?usp=sharing"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;My Design Portfolio
          </Button>
        </Row>
    
      </Container>
    </div>
  );
}

export default ResumeNew;
