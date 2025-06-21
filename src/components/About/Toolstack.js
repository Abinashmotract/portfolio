import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGraphql,
  SiGithub,
  SiNetlify,
  SiMacos
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiNetlify />, name: "Netlify" },
    // { icon: <SiMacos />, name: "macOS" }, // Optional: uncomment if you're using macOS
  ];

  return (
    <>
      <h5 style={{ textAlign: "left", color: "#6d295a", fontWeight: "bold" }}>
        Tools & Platforms I Use
      </h5>
      <Row style={{ justifyContent: "start", paddingBottom: "30px" }}>
        {tools.map((tool, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
            >
              <div>{tool.icon}</div>
            </OverlayTrigger>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Toolstack;
