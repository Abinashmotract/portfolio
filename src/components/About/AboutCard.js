import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abinash Sinha</span> from{" "}
            <span className="purple">Lucknow, India.</span>
            <br />
            I am currently working as a <strong>Full-Stack Engineer</strong> at{" "}
            <span className="purple">Aayan Infotech Pvt. Ltd.</span>, where I build and maintain scalable web applications using the MERN stack.
            <br />
            I hold an <strong>Integrated MCA</strong> degree in Computer Application from{" "}
            <span className="purple">Chandigarh University</span>.
            <br />
            <br />
            I have approximately 3 years of professional experience, having previously worked on projects involving React, Vue.js, Node.js, Stripe integrations, and more.
            <br />
            <br />
            My technical skills include React.js, React Native, Next.js, Vue.js, Redux, Node.js, Express.js, MongoDB, Firebase, SQL, AWS (Basic), and payment integrations like Stripe.
            <br />
            <br />
            I enjoy building feature-rich, scalable products from the ground up and solving real-world problems with clean, efficient code.
            <br />
            <br />
            Apart from coding, here are a few things I love doing:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess & Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography & Capturing Moments
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech & Blogging
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontSize: "15px", textAlign: "left" }}>
            "Strive to build things that make a difference! Embrace challenges, write code with purpose, and craft solutions that leave a lasting impact."
          </p>
          <footer className="blockquote-footer">Abinash Sinha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
