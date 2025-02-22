import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiTypescript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiVuedotjs,
  SiPostgresql,
  SiAngular,
  SiMaterialdesign,
  SiTailwindcss
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaCcStripe } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

function Techstack() {
  const techStack = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <TbBrandTypescript />, name: "TypeScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <SiAngular />, name: "Angular" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <DiGit />, name: "GitHub" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiMaterialdesign />, name: "Material UI" },
    { icon: <SiTailwindcss />, name: "Tailwind Css" },
    { icon: <FaCcStripe />, name: "Stripe" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
