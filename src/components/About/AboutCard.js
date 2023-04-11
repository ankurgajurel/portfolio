import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankur Gajurel </span>
            from <span className="purple"> Bhaktapur, Nepal.</span>
            <br />I am a high school senior interested in Python and JS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Brands
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar, Ukulele, Piano
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ankur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
