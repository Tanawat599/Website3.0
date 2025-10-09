import React from "react";
import Link from "next/link";
import { Container, Nav, Navbar} from "react-bootstrap";


export default function NavBar() {

    return (

        <>
          <Navbar 
            bg="light" 
            data-bs-theme="light" 
            style={{
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 1000,
              backgroundColor: "rgba(255, 255, 255, 0.5)", // สีขาวโปร่งใส
              backdropFilter: "blur(100px)", // ทำเบลอพื้นหลัง
              WebkitBackdropFilter: "blur(10px)", // สำหรับ Safari
            }}
          >
            <Container>
              <Navbar.Brand href="#home" style={{fontWeight: '600'}}>Kidinventor</Navbar.Brand>
              <Nav style={{fontWeight: '600'}}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about" >About</Nav.Link>
                <Nav.Link href="#myproject">Project</Nav.Link>
                <Nav.Link href="#certificates">Certificates</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
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