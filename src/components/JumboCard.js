import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectCard from "./ProjectCard"
import projects from "../project.json"

class JumboCard extends React.Component {
  state = {projects}


  
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col md={4} style ={{ justifyContent:"center"}}>
                {/* <!--add avatar photo 200 x 267--> */}
                <img
                  class=".img-responsive avatar"
                  src="./images/avatar.png"
                  alt=""
                />
              </Col>

              <Col md={8}>
                <h1>Full Stack Development</h1>
                <p className="lead">
                  My desire to code started in my first engineering class in
                  college when we used C to create a self scoring arduino robot.
                  Since then I have attended a bootcamp to lean Full stack web
                  development. In the future I plan to use my knowledge to work in
                  the industry of machine learning and the internet of things
                  because I have a strong desire to use computer programming to
                  help automate everyday processes. Click the upper right hand
                  'contact me' for my resume and my social media.
                  {/* <!-- <h1>Social Media</h1> */}
                  <a href="https://www.instagram.com/phenomenal_kickz/">
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                </p>
              </Col>
              <Col md={12}>
              <hr  style={{
                  color: '#B0B0B0',
                  backgroundColor: '#000000',
                  height: .05,
                  borderColor : '#000000'
              }}/>
                <h1 className ="text-center">My Favorite Projects</h1>
              </Col>
            </Row>
            <Row>
            {this.state.projects.map(project =>(
            <ProjectCard style={{display:"flex"}}
            key = {project.id}
            title ={project.title}
            image =  {project.image}
            description = {project.description}
            gitRepo =  {project.gitRepo}
            livePage =  {project.livePage}
            ></ProjectCard>
            ))}
            </Row>
          </Container>
        </Jumbotron>
      </div>
  );
}
}

export default JumboCard;
