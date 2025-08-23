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
  SiMacos,
  SiDocker,
  SiJenkins,
  SiNginx,
  SiAwslambda
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
    { icon: <SiSlack />, name: "Slack", color: "#4A154B" },
    { icon: <SiVercel />, name: "Vercel", color: "#000000" },
    { icon: <SiGithub />, name: "GitHub", color: "#181717" },
    { icon: <SiNetlify />, name: "Netlify", color: "#00C7B7" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <SiJenkins />, name: "Jenkins", color: "#D24939" },
    { icon: <SiNginx />, name: "Nginx", color: "#009639" },
    { icon: <FaAws />, name: "AWS", color: "#FF9900" },
    { icon: <SiAwslambda />, name: "AWS Lambda", color: "#FF9900" },
  ];

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
      
      <div style={{
        position: "absolute",
        top: "-50%",
        right: "-50%",
        width: "200%",
        height: "200%",
        background: "radial-gradient(circle, rgba(92, 107, 192, 0.15) 0%, transparent 60%)",
        animation: "rotate 20s infinite linear",
        zIndex: "0"
      }}></div>
      
      <h2 style={{
        textAlign: "center",
        marginBottom: "40px",
        color: "white",
        fontSize: "2.2rem",
        fontWeight: "700",
        textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        position: "relative",
        zIndex: "2"
      }}>
        Tools & <span style={{color: "#8A2BE2"}}>Platforms</span>
      </h2>
      
      <Row style={{ justifyContent: "center", position: "relative", zIndex: "2" }}>
        {tools?.map((tool, index) => (
          <Col key={index} xs={4} sm={3} md={2} style={{ marginBottom: "25px", textAlign: "center" }}>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${index}`} 
                  style={{
                    borderRadius: "8px",
                    background: "rgba(40, 40, 40, 0.95)",
                    padding: "8px 12px",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}
                >
                  {tool.name}
                </Tooltip>
              }
            >
              <div 
                style={{
                  padding: "15px",
                  borderRadius: "15px",
                  background: "rgba(255, 255, 255, 0.05)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  animation: `floatIn 0.8s ease-out ${index * 0.1}s both`,
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                className="tool-icon-wrapper"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.1)";
                  e.currentTarget.style.background = `rgba(${parseInt(tool.color.slice(1, 3), 16)}, ${parseInt(tool.color.slice(3, 5), 16)}, ${parseInt(tool.color.slice(5, 7), 16)}, 0.15)`;
                  e.currentTarget.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px ${tool.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
                }}
              >
                <div style={{
                  fontSize: "2.8rem",
                  color: tool.color,
                  transition: "all 0.3s ease",
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                  marginBottom: "10px"
                }}>
                  {tool.icon}
                </div>
                <div style={{
                  fontSize: "0.85rem",
                  color: "#ddd",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  opacity: "0.9"
                }}>
                  {tool.name}
                </div>
              </div>
            </OverlayTrigger>
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
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes floatIn {
            0% { 
              opacity: 0;
              transform: translateY(30px) scale(0.9);
            }
            100% { 
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .tool-icon-wrapper:hover {
            z-index: 10;
          }
          
          .tool-icon-wrapper:hover div {
            color: #ffffff !important;
          }
        `}
      </style>
    </div>
  );
}

export default Toolstack;