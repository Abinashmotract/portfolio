import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import certificate1 from "../../Assets/61f89754-40bd-4822-bb3d-e9756b5eeb7c.JPEG";
import certificate2 from "../../Assets/javascript(basic).png";
import certificate3 from "../../Assets/coursera2-aws_page-0001.jpg";

function About() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const certificates = [
    { id: 1, src: certificate1, alt: "Certificate 1", title: "HackerRank Problem Solving" },
    { id: 2, src: certificate2, alt: "Certificate 2", title: "JavaScript Basic Certificate" },
    { id: 3, src: certificate3, alt: "Certificate 3", title: "AWS Cloud Fundamentals" },
    // Add more certificates here
  ];

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
            <h3 style={{ color: "white", marginBottom: "20px", textAlign: "center" }}>
              My <span className="purple">Certifications</span>
            </h3>

            <Row className="justify-content-center">
              {certificates.map((cert, index) => (
                <Col xs={6} md={6} key={cert.id} className="mb-4 text-center">
                  <div
                    className="certificate-thumbnail"
                    onClick={() => handleShow(index)}
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        border: "2px solid rgba(138, 43, 226, 0.3)",
                        borderRadius: "10px"
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Techstack />
        <Toolstack />

        {/* Modal for enlarged view - Placed outside the Row to prevent rendering issues */}
        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          centered
          style={{
            backdropFilter: "blur(5px)"
          }}
        >
          <Modal.Header 
            closeButton 
            style={{ 
              background: "linear-gradient(45deg, #6c5ce7, #8A2BE2)", 
              color: "white",
              border: "none"
            }}
          >
            <Modal.Title>My Certifications</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0" }}>
            <Carousel
              activeIndex={selectedIndex}
              onSelect={setSelectedIndex}
              interval={null}
              prevIcon={
                <span 
                  aria-hidden="true" 
                  style={{ 
                    fontSize: "2rem", 
                    color: "#8A2BE2",
                    background: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  ‹
                </span>
              }
              nextIcon={
                <span 
                  aria-hidden="true" 
                  style={{ 
                    fontSize: "2rem", 
                    color: "#8A2BE2",
                    background: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  ›
                </span>
              }
            >
              {certificates.map((cert) => (
                <Carousel.Item key={cert.id}>
                  <img
                    className="d-block w-100"
                    src={cert.src}
                    alt={cert.alt}
                    style={{
                      borderRadius: "0 0 5px 5px"
                    }}
                  />
                  <Carousel.Caption style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "5px",
                    left: "50%",
                    right: "50%",
                    transform: "translateX(-50%)",
                    bottom: "10px",
                    width: "fit-content",
                    padding: "5px 15px",
                    maxWidth: "80%"
                  }}>
                    <h5>{cert.title}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>

        <style>
          {`
            .certificate-thumbnail:hover {
              transform: scale(1.05);
            }
            
            .carousel-control-prev, .carousel-control-next {
              width: 5%;
            }
            
            .carousel-control-prev {
              left: 10px;
            }
            
            .carousel-control-next {
              right: 10px;
            }
          `}
        </style>

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;