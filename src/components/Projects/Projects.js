import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Image imports
import snootme from "../../Assets/Projects/snootme.png";
import trello from "../../Assets/Projects/trello.png";
import robertjohnson from "../../Assets/Projects/robertjohnson.png";
import stylecapsule from "../../Assets/Projects/stylecapsule.png";
import vault21 from "../../Assets/Projects/vault21.png";
import discountdoors from "../../Assets/Projects/discount&doors.png";
import rokmex from "../../Assets/Projects/rokmex.png";
import hairstylist from "../../Assets/Projects/hairstylist.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent & Previous <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently and in the past.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project: Style Capsule */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[stylecapsule]}
              isBlog={false}
              title="Style Capsule"
              description="An e-commerce platform with virtual wardrobe and 3D try-on system using React Fiber & Three.js. Includes admin dashboard, social styling, stylist chat/booking, and Stripe integration."
              demoLink="http://18.209.91.97:2024/"
            />
          </Col>

          {/* Project: Robert Johnson */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[robertjohnson]}
              isBlog={false}
              title="Robert Johnson's"
              description="Automotive blog platform offering repair guides, how-to videos, product reviews, and maintenance advice for both DIYers and professionals."
              demoLink="http://18.209.91.97:6542/"
            />
          </Col>

          {/* Project: Discount & Doors */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[discountdoors]}
              isBlog={false}
              title="Discount & Doors"
              description="Custom e-commerce platform for door and window sales. Dynamic dimensions, Stripe/PayPal payment, and JSON-based content management for full customization."
              demoLink="https://discountdoorandwindow.com"
            />
          </Col>

          {/* Project: SnootMe */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[snootme]}
              isBlog={false}
              title="SnootMe"
              description="A subscription-based portfolio review platform for photographers and artists. Offers expert feedback through virtual sessions, replacing traditional workshops."
              demoLink="https://www.snootme.com/"
            />
          </Col>

          {/* Project: Vault 21 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[vault21]}
              isBlog={false}
              title="Vault 21"
              description="An online casino experience platform with slots, table games, and live dealer options. Secure transactions, fast payouts, and a mobile-optimized UI."
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Col>

          {/* Project: Trello Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[trello]}
              isBlog={false}
              title="Trello Clone"
              description="A Trello-style Kanban task manager built for team collaboration. Includes drag & drop tasks, status tracking, and customizable boards."
              demoLink="https://trello-project-xg5n.onrender.com/"
            />
          </Col>

          {/* Project: Rokmex Biocare */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[rokmex]}
              isBlog={false}
              title="Rokmex Biocare"
              description="Pharmaceutical and healthcare website offering high-quality medicines, OTC products, and wellness items. Focused on reliability, quality, and user experience."
              demoLink="https://trello-project-xg5n.onrender.com/"
            />
          </Col>

          {/* 🆕 Project: HairStylist */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[hairstylist]}
              isBlog={false}
              title="HairStylist"
              description="A full-featured platform where users can book appointments with professional stylists, browse stylist profiles, and chat in real time. Admin dashboard for managing stylists, appointments, availability, and packages. Built using MERN stack with JWT auth and role-based panels."
              demoLink="https://hairstylist-booking-app-demo.com" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
