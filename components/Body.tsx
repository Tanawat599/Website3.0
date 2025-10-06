// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Project() {
//   return (
//     <Container>
//       <Row>
//         <Col md={3} className="bg-light p-3 border">
//           คอลัมน์ 1
//         </Col>
//         <Col md={3} className="bg-secondary text-white p-3 border">
//           คอลัมน์ 2
//         </Col>
//         <Col md={3} className="bg-light p-3 border">
//           คอลัมน์ 3
//         </Col>
//         <Col md={3} className="bg-secondary text-white p-3 border">
//           คอลัมน์ 4
//         </Col>
//       </Row>
//     </Container>
//   );
// }
import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProjectCard() {
  return (
    <>
        <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                นี่คือรายละเอียดสั้น ๆ ของโปรเจกต์
                </Card.Text>
                <Button variant="primary">View Project</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                นี่คือรายละเอียดสั้น ๆ ของโปรเจกต์
                </Card.Text>
                <Button variant="primary">View Project</Button>
            </Card.Body>
        </Card>
    </>

    
  );
}
