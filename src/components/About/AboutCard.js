import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            {/* Hi Everyone, I am <span className="purple">Michael Lane. </span>
            from <span className="purple"> Victoria, Canada.</span> */}
            <br /> I'm a frontend developer with 8 years of experience specializing in React. I have a passion for creating high-quality user interfaces and enjoy tackling complex problems.
            <br /> I'm constantly learning and exploring new technologies to improve my skills and deliver the best possible solutions.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Thinking 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive not to be a success, but rather to be of value!"{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
