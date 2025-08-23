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
    { icon: <DiReact />, name: "React.js", color: "#61DAFB" },
    { icon: <SiVuedotjs />, name: "Vue.js", color: "#4FC08D" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiAngular />, name: "Angular", color: "#DD0031" },
    { icon: <SiMaterialdesign />, name: "Material UI", color: "#007FFF" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
  ],
  "Backend": [
    { icon: <DiNodejs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express.js", color: "#000000" },
  ],
  "Languages": [
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <TbBrandTypescript />, name: "TypeScript", color: "#3178C6" },
  ],
  "Database & Cloud": [
    { icon: <DiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <FaAws />, name: "AWS", color: "#FF9900" },
  ],
  "Tools & Payments": [
    { icon: <DiGit />, name: "Git", color: "#F05032" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <FaCcStripe />, name: "Stripe", color: "#008CDD" },
    { icon: <SiPaypal />, name: "PayPal", color: "#00457C" },
  ],
};

function Techstack() {
  return (
    <div style={{
      padding: "30px 20px",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      margin: "40px 0",
      overflow: "hidden",
      position: "relative"
    }}>
      {/* Animated background elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "linear-gradient(90deg, #8A2BE2, #FF6C37, #00C7B7, #8A2BE2)",
        backgroundSize: "300% 100%",
        animation: "gradientShift 3s infinite linear",
      }}></div>

      <h2 style={{
        textAlign: "center",
        marginBottom: "40px",
        color: "white",
        fontSize: "2.5rem",
        fontWeight: "700",
        textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        position: "relative",
        zIndex: "2"
      }}>
        Technical <span style={{ color: "#8A2BE2" }}>Skills</span>
      </h2>

      <Row style={{ justifyContent: "center", position: "relative", zIndex: "2" }}>
        {Object.entries(techCategories).map(([category, items], catIndex) => (
          <Col key={catIndex} xs={12} md={6} lg={4} style={{ marginBottom: "30px" }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "15px",
              padding: "20px",
              height: "100%",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              animation: `fadeInUp 0.6s ease-out ${catIndex * 0.1}s both`
            }} className="tech-category-card">
              <h3 style={{
                color: "white",
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "1.4rem",
                fontWeight: "600",
                borderBottom: "2px solid #8A2BE2",
                paddingBottom: "10px"
              }}>{category}</h3>

              <Row style={{ justifyContent: "center" }}>
                {items.map((tech, index) => (
                  <Col xs={6} sm={4} key={index} style={{ textAlign: "center", marginBottom: "20px" }}>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id={`tooltip-${category}-${index}`} style={{
                        borderRadius: "8px",
                        background: "rgba(40, 40, 40, 0.95)",
                        padding: "5px 10px",
                        fontSize: "0.9rem"
                      }}>{tech.name}</Tooltip>}
                    >
                      <div
                        style={{
                          padding: "12px",
                          borderRadius: "12px",
                          background: "rgba(138, 43, 226, 0.1)",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          animation: `bounceIn 0.8s ease-out ${(catIndex * 0.2) + (index * 0.1)}s both`
                        }}
                        className="tech-icon-wrapper"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `rgba(${parseInt(tech.color.slice(1, 3), 16)}, ${parseInt(tech.color.slice(3, 5), 16)}, ${parseInt(tech.color.slice(5, 7), 16)}, 0.2)`;
                          e.currentTarget.style.boxShadow = `0 0 15px ${tech.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(138, 43, 226, 0.1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div style={{
                          fontSize: "2.2rem",
                          color: tech.color,
                          transition: "all 0.3s ease",
                          filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3))"
                        }}>
                          {tech.icon}
                        </div>
                        <div style={{
                          fontSize: "0.8rem",
                          marginTop: "8px",
                          color: "#ddd",
                          fontWeight: "500",
                          transition: "all 0.3s ease"
                        }}>
                          {tech.name}
                        </div>
                      </div>
                    </OverlayTrigger>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        ))}
      </Row>

      {/* Inline style tag for animations */}
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes fadeInUp {
            0% { 
              opacity: 0;
              transform: translateY(30px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounceIn {
            0% { 
              opacity: 0;
              transform: scale(0.5);
            }
            50% { 
              opacity: 1;
              transform: scale(1.1);
            }
            100% { 
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .tech-category-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3) !important;
          }
          
          .tech-icon-wrapper:hover {
            background: rgba(138, 43, 226, 0.2) !important;
            transform: translateY(-3px) scale(1.05) !important;
          }
          
          .tech-icon-wrapper:hover div {
            color: #ffffff !important;
          }
        `}
      </style>
    </div>
  );
}

export default Techstack;