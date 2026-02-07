import React from "react";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";


export default function NavBar() {

  return (

    <>
      <Navbar
        expand="lg"
        variant="dark"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "rgba(37, 38, 42, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "1rem 0",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#home" style={{
            fontWeight: "700",
            marginLeft: '5%',
            color: '#4dba87',
            fontSize: '1.5rem',
            letterSpacing: '1px'
          }}>
            Kidinventor
          </Navbar.Brand>

          {/* ปุ่ม toggle สำหรับจอเล็ก */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* ส่วนเมนู */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" style={{ fontWeight: "400", marginRight: '5%', gap: '0.5rem' }} >
              <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
              <Nav.Link href="#myproject" className="nav-link-custom">Project</Nav.Link>
              <Nav.Link href="#certificates" className="nav-link-custom">Certificates</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}
// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function ProjectCard() {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="https://via.placeholder.com/150" />
//       <Card.Body>
//         <Card.Title>Project 1</Card.Title>
//         <Card.Text>
//           นี่คือรายละเอียดสั้น ๆ ของโปรเจกต์
//         </Card.Text>
//         <Button variant="primary">View Project</Button>
//       </Card.Body>
//     </Card>
//   );
// }
// <nav className="flex light-bg justify-space">
//     <div className="logo white">
//         <Link href="/">                </Link>
//     </div>

//     <ul className="flex white">
//         <li className="white">
//             <Link href="/">{"Home"}</Link>
//         </li>
//         <li>
//             <Link href="/#about">About Me.</Link>
//         </li>
//     </ul>
// </nav>