import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "justify" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <span className="purple">Full-Stack Developer</span> with over 3 years of experience
              specializing in the <span className="purple">MERN stack</span> and modern web technologies.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple"> JavaScript, TypeScript, </b>
              </i>
              and have extensive experience with
              <i>
                <b className="purple"> React.js, Next.js, Vue.js, and Node.js</b>
              </i>
              <br />
              <br />
              My expertise includes building
              <i>
                <b className="purple"> scalable web applications </b>
              </i>
              with
              <i>
                <b className="purple"> 80%+ reusable components</b>
              </i>
              , integrating
              <i>
                <b className="purple"> third-party APIs</b>
              </i>
              , and implementing
              <i>
                <b className="purple"> payment systems with Stripe and PayPal</b>
              </i>
              <br />
              <br />
              I've successfully delivered projects that resulted in
              <i>
                <b className="purple"> 30% faster development cycles</b>
              </i>
              ,
              <i>
                <b className="purple"> 40% performance improvements</b>
              </i>
              , and
              <i>
                <b className="purple"> 25% reduction in bug rates</b>
              </i>
              through automated testing
              <br />
              <br />
              I'm passionate about creating
              <i>
                <b className="purple"> efficient, user-focused solutions</b>
              </i>
              and continuously exploring new technologies to enhance my skill set
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{ borderRadius: "50%" }} src="https://media.licdn.com/dms/image/v2/D4D03AQFdOqHAfs_6QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709892867050?e=1755734400&v=beta&t=fciCget5jDaJyxuT5GaWXAIKHSpe54JybGsL51KfgBY" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sinhaabinash47"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sinha2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
