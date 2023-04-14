import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCardInstagram from "./ProjectCardsInstagram";
import ProjectCardLinkedin from "./ProjectCardsLinkedin";
import Particle from "../Particle";
import ca from "../../Assets/Projects/ca.png";
import doppler from "../../Assets/Projects/doppler.png";
import findkathmandu from "../../Assets/Projects/findkathmandu.png";
import nestnepal from "../../Assets/Projects/nestnepal.png";
import nepalts from "../../Assets/Projects/nepalts.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="projects">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

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
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAxK5yjd6IxyTNKi2J3xfty72P4-zAWTTB8eF_8Ad&s"}
              isBlog={false}
              title="Programming Content"
              description="Designs related to content on programming and tech as a whole"     
              ghLink="https://github.com/ankurgajurel"
              demoLink="https://docs.google.com/spreadsheets/d/1AxSZf2wJTAb8WYmpwUHO_hNXBraaZCwFeLf8dgq5_Sk/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAxK5yjd6IxyTNKi2J3xfty72P4-zAWTTB8eF_8Ad&s"}
              isBlog={false}
              title="Ghost Writer"
              description="I used to research on small topics and write content on them at Status Neo"     
              ghLink=""
              demoLink="https://statusneo.com/author/bikram-chopra/"
            />
          </Col>
        </Row>
      </Container>
      <Container className="companies">
        <h1 className="project-heading">
          I've <strong className="purple">Worked </strong> with
        </h1>
        <p style={{ color: "white" }}>
          Here are a few organizations and companies I've worked with.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://nestnepal.com/blog/wp-content/uploads/2022/04/Meta-Tags.png"}
              isBlog={false}
              title="Nest Nepal"
              description="Webmaster, Wordpress Designer, Technical Writer"
              ghLink="https://github.com/ankurgajurel/Nest-Nepal"
              demoLink="https://nestnepal.com/blog/author/ankurgajurel02"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://copyassignment.com/wp-content/uploads/2022/08/copyassignment.com_-3.png"}
              isBlog={false}
              title="copyassignment.com"
              description="Editor, Webmaster, Wordpress Designer"
              ghLink="https://github.com/copyassignment"
              demoLink="https://copyassignment.com/author/ankur"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={nepalts}
              isBlog={false}
              title="Nepal Trade Solutions"
              description="Webmaster, SMM, EM and Scheduling"
              igLink="https://instagram.com/nepal_tradesolutions"
              demoLink="https://nepalts.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://thetwl.org/wp-content/uploads/2022/10/Pytorch.jpg"}
              isBlog={false}
              title="Together We Lern"
              description="Coordinator, Talk Session Host"
              ghLink="https://github.com/twlorg"
              demoLink="https://thetwl.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={"https://sedsnepal.org/wp-content/uploads/2020/01/sedssxc-1.jpg"}
              isBlog={false}
              title="SEDS Nepal"
              description="Webmaster"
              igLink="https://www.instagram.com/sedsnepal"
              demoLink="https://sedsnepal.org/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardLinkedin
              imgPath={"https://courses.olymped.com/wp-content/uploads/2022/02/logo-1.png"}
              isBlog={false}
              title="OlympEd"
              description="Web Designer"
              igLink="https://www.linkedin.com/company/olymped-nepal"
              demoLink="https://courses.olymped.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={"https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/305926641_5853894337962876_2781538654987548043_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=b0YFVBuszEgAX-KvMFq&_nc_ht=scontent.fktm20-1.fna&oh=00_AfCdolUW70wiqygzH4UcdD9iQcRTefneX4a4WHoQ_6ecbQ&oe=643C9E46"}
              isBlog={false}
              title="Squad of Changemakers"
              description=""     
              igLink="https://www.instagram.com/squadofchangemakers/"
              demoLink="https://squadnepal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={"https://media.licdn.com/dms/image/C4E22AQHEuCbEXgAbNw/feedshare-shrink_800/0/1668163454349?e=2147483647&v=beta&t=khdCPCL0vIJIw9iIucj_kd6MVcLUivRmInBR_tm49-k"}
              isBlog={false}
              title="Radio Photo Patrika Sathi"
              description=""     
              igLink="https://instagram.com/rppsathi"
              demoLink="https://rppsathi.com.np/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardInstagram
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIRHPg9RrBuiSYRDJTI_Q-n10HcK6xpytyA&usqp=CAU"}
              isBlog={false}
              title="Nepal Scouts"
              description=""     
              igLink="https://www.instagram.com/nepalscouts/"
              demoLink="https://nepalscouts.org/"
            />
          </Col>
        </Row>
      </Container>
      
    </Container>
  );
}

export default Projects;
