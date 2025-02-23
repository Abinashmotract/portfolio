import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import certificate from "../../Assets/61f89754-40bd-4822-bb3d-e9756b5eeb7c.JPEG";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Certificate Of <strong className="purple">Appreciation</strong>
      </h1>
      {/* <GitHubCalendar
        username="Abinash4419"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
      <img src={certificate} alt="about" className="img-fluid" />
    </Row>
  );
}

export default Github;
