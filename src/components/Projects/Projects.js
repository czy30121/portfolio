import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import alma from "../../Assets/Projects/alma.png";
import adminDash from "../../Assets/Projects/adminDash.png";
import chat from "../../Assets/Projects/chat.png";
import wordTheme from "../../Assets/Projects/wordTheme.png";
import wordThemeNovel from "../../Assets/Projects/wordThemeNovel.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alma}
              isBlog={false}
              title="Alma"
              description="An interactive playground for generative graphics. Combine nodes & logic into WebGL shaders - all through an intuitive no-code interface."
              ghLink="https://github.com/hs10530/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminDash}
              isBlog={false}
              title="API Platform Admin"
              description="API Platform Admin is a tool to automatically create a beautiful (Material Design) and fully-featured administration interface for any API supporting the Hydra Core Vocabulary or exposing an OpenAPI documentation, including but not limited to all APIs created using the API Platform framework."
              ghLink="https://github.com/hs10530/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Next.js AI Chatbot"
              description=" An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Vercel KV."
              ghLink="https://github.com/hs10530/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordTheme}
              isBlog={false}
              title="VueWordPress Theme"
              description="A true WordPress theme with the guts ripped out and replaced with Vue. Looking to create a Vue-powered WordPress plugin? I've got a starter for that too!"
              ghLink="https://github.com/hs10530/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordThemeNovel}
              isBlog={false}
              title="WordPress Author Theme"
              description="This theme was originally developed for a closed group of authors and not intended for a public release. This is still reflected in the code, which takes several liberties not considered best practice."
              ghLink="https://github.com/hs10530/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
