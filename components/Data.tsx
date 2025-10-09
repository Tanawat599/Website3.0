// "use client"
// import { useEffect, useState } from "react"
// import { supabase } from "./supabaseClient"
// import { Container,Card, Button ,Row,Col} from "react-bootstrap";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// type Project = {
//   id: number
//   name: string
//   image: string
//   description: string
// }

// export default function ProjectsList() {
//   const [projects, setProjects] = useState<Project[]>([])

//   useEffect(() => {
//     fetchProjects()
//   }, [])

//   async function fetchProjects() {
//     const { data, error } = await supabase.from("project").select("*")
//     if (error) console.error("❌ Error fetching data:", error)
//     else {
//       console.log("✅ Fetched data:", data)
//       setProjects(data)
//     }
//   }

//   console.log("Rendering projects:", projects)

//   if (projects.length === 0) return <p>กำลังโหลดข้อมูล...</p>

//   return (
//     <div style={{background:'#25262A',paddingBottom: '20px'}} >
//         <div className="tag-head" style={{ textAlign: 'center' ,marginBottom:"5%"}}>My Project</div>

//         <Container className="dark-bg">
//             <Row className="g-4" style={{ backgroundColor: "#25262A" }}>
//                 {projects.map((p) => (
//                 <Col md={3} key={p.id} style={{ backgroundColor: "#25262A" }}>
//                     <Card className="h-100 d-flex flex-column shadow-sm " style={{ backgroundColor: "#555659" }}>
//                     <Card.Img
//                         variant="top"
//                         src={p.image}
//                         className="img-fluid"
//                         style={{
//                         height: "200px",
//                         objectFit: "contain",
//                         backgroundColor: "#555659",
//                         padding: "10px",
//                         }}
//                     />
//                     <Card.Body className="d-flex flex-column"style={{ backgroundColor: "#555659" }}>
//                         <Card.Title className="fw-bold" style={{color: "#FFFFFF"}}>{p.name}</Card.Title>
//                         <Card.Text className="flex-grow-1" style={{color: "#FFFFFF"}}>{p.description}</Card.Text>
//                         <Button variant="primary" className="mt-auto align-self-start" style={{ backgroundColor: "#4dba87" }}>
//                         View Project
//                         </Button>
//                     </Card.Body>
//                     </Card>
//                 </Col>
//                 ))}
//             </Row>
//         </Container>
//     </div>
// )
// }
"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// type ของข้อมูล
type Item = {
  id: number;
  name: string;
  image: string;
  description: string;
};

// Component หลัก
export default function ProjectsAndCertificates() {
  const [projects, setProjects] = useState<Item[]>([]);
  const [certificates, setCertificates] = useState<Item[]>([]);

  useEffect(() => {
    fetchProjects();
    fetchCertificates();
  }, []);

  // ดึงข้อมูลจาก table "project"
  async function fetchProjects() {
    const { data, error } = await supabase.from("project").select("*");
    if (error) console.error("❌ Error fetching projects:", error);
    else {
      console.log("✅ Projects:", data);
      setProjects(data);
    }
  }

  // ดึงข้อมูลจาก table "certificate"
  async function fetchCertificates() {
    const { data, error } = await supabase.from("certificate").select("*");
    if (error) console.error("❌ Error fetching certificates:", error);
    else {
      console.log("✅ Certificates:", data);
      setCertificates(data);
    }
  }

  // ฟังก์ชันแสดง Card (ใช้ซ้ำได้)
  const renderCards = (items: Item[]) => (
    <Container className="dark-bg">
      <Row className="g-4" style={{ backgroundColor: "#25262A" }}>
        {items.map((p) => (
          <Col md={3} key={p.id} style={{ backgroundColor: "#25262A" }}>
            <Card
              className="h-100 d-flex flex-column shadow-sm"
              style={{ backgroundColor: "#555659" }}
            >
              <Card.Img
                variant="top"
                src={p.image}
                className="img-fluid"
                style={{
                  height: "200px",
                  objectFit: "contain",
                  backgroundColor: "#555659",
                  padding: "10px",
                }}
              />
              <Card.Body
                className="d-flex flex-column"
                style={{ backgroundColor: "#555659" }}
              >
                <Card.Title
                  className="fw-bold"
                  style={{ color: "#FFFFFF" }}
                >
                  {p.name}
                </Card.Title>
                <Card.Text
                  className="flex-grow-1"
                  style={{ color: "#FFFFFF" }}
                >
                  {p.description}
                </Card.Text>
                <Button
                  variant="primary"
                  className="mt-auto align-self-start"
                  style={{ backgroundColor: "#4dba87" }}
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

  return (
    <div style={{ background: "#25262A", paddingBottom: "5%" }}>
      <div
        className="tag-head"
        style={{ textAlign: "center", marginBottom: "5%", color: "white" }}
      >
        My Projects
      </div>
      {projects.length > 0 ? renderCards(projects) : <p style={{ color: "white", textAlign: "center" }}>กำลังโหลด Projects...</p>}

      <div
        className="tag-head"
        style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%", color: "white" }}
      >
        My Certificates
      </div>
      {certificates.length > 0 ? renderCards(certificates) : <p style={{ color: "white", textAlign: "center" }}>กำลังโหลด Certificates...</p>}
    </div>
  );
}
