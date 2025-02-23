import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snootme from "../../Assets/Projects/snootme.png";
import trello from "../../Assets/Projects/trello.png";
import robertjohnson from "../../Assets/Projects/robertjohnson.png";
import stylecapsule from "../../Assets/Projects/stylecapsule.png";
import vault21 from "../../Assets/Projects/vault21.png";
import discountdoors from "../../Assets/Projects/discount&doors.png";
import rokmex from "../../Assets/Projects/rokmex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent & Previous <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recent & previous.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stylecapsule}
              isBlog={false}
              title="Style Capsule"
              description="The Style Capsule features established and up and coming Australian labels, providing carefully hand-picked pieces that effortlessly fit into your wardrobe."
              // ghLink="https://github.com/Abinash4419/Chatify"
              demoLink="http://54.236.98.193:2024/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robertjohnson} 
              isBlog={false}
              title="Robert Johnson's"
              description="PartsAvatar is your go-to destination for automotive repair and maintenance resources. Whether you're a professional mechanic or a DIY enthusiast, our blog offers expert advice, step-by-step repair guides, and product recommendations to keep your vehicle in top shape. From how-to videos to troubleshooting tips, we provide the knowledge you need to tackle any auto project with confidence. Get the right parts, the right information, and the best solutions—all in one place."
              // ghLink="https://github.com/Abinash4419/Bits-0f-C0de"
              demoLink="http://54.236.98.193:6542/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discountdoors}
              isBlog={false}
              title="Discount & Doors"
              description="Discount Door and Window (DDW) offers the lowest-cost retrofit doors and windows by partnering with top wholesalers and minimizing overhead costs. Founded by Alan Holsapple, who has 21 years of experience in door and window installation, DDW ensures high-quality, energy-efficient products at unbeatable prices. Committed to sustainability and security, DDW provides a Learning Center to help customers make informed decisions within their budget. For any inquiries, customers can reach out via email or phone for expert assistance."
              // ghLink="https://github.com/Abinash4419/Editor.io"
              demoLink="http://54.236.98.193:2040/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snootme}
              isBlog={false}
              title="SnootMe"
              description="Snootme is a Belgian platform designed to provide photographers and artists with professional portfolio reviews. It bridges the gap between creatives and the art market by offering accessible, year-round feedback from industry experts. Unlike traditional trade shows or workshops, Snootme provides convenient, remote review sessions that eliminate travel and printing costs. The platform fosters growth through constructive critiques, helping artists refine their work while facilitating connections with industry stakeholders. Committed to continuous improvement, Snootme ensures high-quality, professional feedback, empowering creatives to succeed in the competitive art world."
              // ghLink="https://github.com/Abinash4419/Plant_AI"
              demoLink="https://www.snootme.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vault21}
              isBlog={false}
              title="Vault 21"
              description="Cashino is an online casino platform offering a thrilling gaming experience with a variety of slots, table games, and live dealer options. Designed for seamless play on desktop and mobile, it provides a secure and user-friendly interface. Players can enjoy exciting bonuses, fast payouts, and a wide selection of games from top providers. With advanced security measures and responsible gaming features, Cashino ensures a safe and enjoyable environment. Whether you're a beginner or a seasoned player, Cashino delivers top-tier entertainment with fair play and engaging rewards. Join now for a premium casino experience!"
              // ghLink="https://github.com/Abinash4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trello}
              isBlog={false}
              title="Trello"
              description="Trello and Jira are project management tools developed by Atlassian. Trello is a user-friendly, visual tool that helps teams organize tasks using boards, lists, and cards, making it ideal for simple workflows and collaboration. Jira, on the other hand, is a powerful tool designed for software development and agile project management, offering advanced features like sprint planning, issue tracking, and reporting. While Trello is great for general task management, Jira is preferred for complex projects requiring detailed tracking and automation. Both tools enhance productivity by streamlining workflows and improving team collaboration."
              // ghLink="https://github.com/Abinash4419/Face_And_Emotion_Detection"
              demoLink="https://trello-project-xg5n.onrender.com/"    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rokmex}
              isBlog={false}
              title="Rokmex Biocare"
              description="Rokmex Biocare is a leading pharmaceutical and healthcare website offering high-quality medicines, supplements, and wellness products. Committed to innovation and patient care, Rokmex Biocare provides a wide range of trusted formulations, including prescription drugs, OTC medications, and nutraceuticals. The platform ensures stringent quality standards, reliable delivery, and customer support. With a focus on health and well-being, Rokmex Biocare aims to make healthcare accessible and affordable. Whether for general health, chronic conditions, or specialized treatments, the website serves as a one-stop destination for medical solutions. Experience safe, effective, and science-backed healthcare products with Rokmex Biocare."
              // ghLink="https://github.com/Abinash4419/Face_And_Emotion_Detection"
              demoLink="https://trello-project-xg5n.onrender.com/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
