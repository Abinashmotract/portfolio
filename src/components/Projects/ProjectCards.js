import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsEye } from "react-icons/bs";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view">
        <div className="project-image-container">
          <Card.Img
            variant="top"
            src={props.imgPath[0]}
            alt="card-img"
            className="project-image"
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div className="project-buttons">
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}

            <Button
              variant="primary"
              onClick={handleShow}
            >
              <BsEye /> &nbsp; View
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel>
            {props.imgPath.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`slide ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ProjectCards;
