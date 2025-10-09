import React from "react";
import { useEffect, useState } from "react"
import { supabase } from "./supabaseClient"
import { Container,Card, Button ,Row,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
type Cer = {
  id: number
  name: string
  image: string
  description: string
}

export default function ProjectCard() {
  const [projects, setProjects] = useState<Cer[]>([])

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    const { data, error } = await supabase.from("certificate").select("*")
    if (error) console.error("❌ Error fetching data:", error)
    else {
      console.log("✅ Fetched data:", data)
      setProjects(data)
    }
  }
  return (

    <div style={{background:'#25262A',paddingBottom: '5%'}} >
        <div className="tag-head" style={{ textAlign: 'center' ,marginBottom:"5%"}}>My Project</div>

        <Container className="dark-bg">
            <Row className="g-4" style={{ backgroundColor: "#25262A" }}>
                {projects.map((p) => (
                <Col md={3} key={p.id} style={{ backgroundColor: "#25262A" }}>
                    <Card className="h-100 d-flex flex-column shadow-sm " style={{ backgroundColor: "#555659" }}>
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
                    <Card.Body className="d-flex flex-column"style={{ backgroundColor: "#555659" }}>
                        <Card.Title className="fw-bold" style={{color: "#FFFFFF"}}>{p.name}</Card.Title>
                        <Card.Text className="flex-grow-1" style={{color: "#FFFFFF"}}>{p.description}</Card.Text>
                        <Button variant="primary" className="mt-auto align-self-start" style={{ backgroundColor: "#4dba87" }}>
                        View Project
                        </Button>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    </div>

    
  );
}
