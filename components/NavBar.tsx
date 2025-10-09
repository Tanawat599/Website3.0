import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">Tanawat Chuthaphiromporn</Link>
            </div>

            <ul className="flex white">
                <li className="white">
                    <Link href="/">{"Home"}</Link>
                </li>
                <li>
                    <Link href="/#about">About Me.</Link>
                </li>
            </ul>
        </nav>
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
