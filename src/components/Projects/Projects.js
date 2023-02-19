import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import Github from "../../Assets/Projects/Github.png";
import Safespace from "../../Assets/Projects/Safespace.png";
import earthly from "../../Assets/Projects/earthly.png";
import Restaurant from "../../Assets/Projects/Restaurant.png";
import library from "../../Assets/Projects/library.png";

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
              imgPath={hotel}
              isBlog={false}
              title="Hotel-Booking"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/thedivyanshu/Spense-Project"
              demoLink="https://spense-project-henna.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Online Libraby Management System"
              description="This is an online library management website in which admin can issue
              books to student and manage the library.Tools: Html,Css,Javascript,Php,Laravel and MysQL."
              ghLink="https://github.com/thedivyanshu/Online-Library-Management-System"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Safespace}
              isBlog={false}
              title="Safespace"
              description="This is a Social Networking Website where we can follow each other,chat with
              them and upload stuff.
              Tools: React, MongoDB, NodeJS, WebRTC, JWT, Redux"
              ghLink="https://github.com/thedivyanshu/SafeSpace_FrontEnd"
              demoLink="https://safe-space-front-end.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={earthly}
              isBlog={false}
              title="Earthly"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/thedivyanshu/Earthly"
              demoLink="https://earthly-beige.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Restaurant}
              isBlog={false}
              title="Restaurant"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/thedivyanshu/Restaurant"
              demoLink="https://inquisitive-panda-9f7a0e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Github}
              isBlog={false}
              title="Github-Profile-Search"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/thedivyanshu/Github-Profile-Search"
              demoLink="https://magical-dieffenbachia-86a7a3.netlify.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
