import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiVuedotjs,
  SiPostman,
  SiExpress,
  SiBootstrap,
  SiMaterialdesign,
  SiTailwindcss,
  SiAngular,
  SiPaypal,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaCcStripe, FaAws } from "react-icons/fa";

const techCategories = {
  "Frontend": [
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiVuedotjs />, name: "Vue.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiAngular />, name: "Angular" },
    { icon: <SiMaterialdesign />, name: "Material UI" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
  ],
  "Backend": [
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
  ],
  "Languages": [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <TbBrandTypescript />, name: "TypeScript" },
  ],
  "Database & Cloud": [
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaAws />, name: "AWS" },
  ],
  "Payments": [
    { icon: <FaCcStripe />, name: "Stripe" },
    { icon: <SiPaypal />, name: "PayPal" },
  ],
};

function Techstack() {
  return (
    <>
      {Object.entries(techCategories).map(([category, items], catIndex) => (
        <div key={catIndex} style={{ marginBottom: "30px" }}>
          <h5 style={{ textAlign: "left", color: "white", fontWeight: "bold" }}>{category}</h5>
          <Row style={{ justifyContent: "start", paddingBottom: "10px" }}>
            {items?.map((tech, index) => (
              <Col key={index} xs={4} md={2} className="tech-icons">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id={`tooltip-${category}-${index}`}>{tech.name}</Tooltip>}
                >
                  <div>{tech.icon}</div>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default Techstack;
