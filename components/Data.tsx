"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

// type ของข้อมูล
type Item = {
  id: number;
  name: string;
  image: string;
  description: string;
  moreinfo: string;
};

// Component หลัก
export default function ProjectsAndCertificates() {
  const [projects, setProjects] = useState<Item[]>([]);
  const [certificates, setCertificates] = useState<Item[]>([]);
  const [showAll, setShowAll] = useState(false); // ✅ state สำหรับแสดงทั้งหมด

  useEffect(() => {
    fetchProjects();
    fetchCertificates();
  }, []);

  // ดึงข้อมูลจาก table "project"
  async function fetchProjects() {
    const { data, error } = await supabase
      .from("project")
      .select("*")
      .order("id", { ascending: true });
    if (error) console.error("❌ Error fetching projects:", error);
    else setProjects(data);
  }

  // ดึงข้อมูลจาก table "certificate"
  async function fetchCertificates() {
    const { data, error } = await supabase
      .from("certificate")
      .select("*")
      .order("id", { ascending: true });
    if (error) console.error("❌ Error fetching certificates:", error);
    else setCertificates(data);
  }

  // ✅ ฟังก์ชัน toggle แสดงโปรเจกต์ทั้งหมด
  const handleShowMore = () => {
    if (showAll) {
      setShowAll(false); // ถ้ากำลังแสดงทั้งหมด → กลับไปแสดงแค่ 8
    } else {
      setShowAll(true); // ถ้ายังไม่แสดงทั้งหมด → แสดงทั้งหมด
    }
  };

  // ฟังก์ชันแสดง Card (ใช้ซ้ำได้)
  const renderCards = (items: Item[], isProject = false) => {
    // ถ้าเป็น project และ showAll = false → แสดงเฉพาะ 8 อัน
    const visibleItems = isProject && !showAll ? items.slice(0, 8) : items;

    return (
      <Container className="light-bg">
        <Row className="g-4" style={{ backgroundColor: "#555659" }}>
          {visibleItems.map((p) => (
            <Col md={3} key={p.id} style={{ backgroundColor: "#555659" }}>
              <Card
                className="h-100 d-flex flex-column "
                style={{ backgroundColor: "#555659"}}
              >

                <Card.Body
                  className="d-flex flex-column"
                  style={{ backgroundColor: "#25262A" ,borderTopLeftRadius: "20px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px" }}
                >
                    <Card.Img
                        variant="top"
                        src={p.image}
                        className="img-fluid"
                        style={{
                            height: "200px",
                            objectFit: "contain",
                            backgroundColor: "#25262A",
                            padding: "10px"
                        }}
                    />
                    <Card.Title
                        className="fw-bold"
                        style={{ color: "#FFFFFF" }}
                    >
                        {p.name}
                    </Card.Title>
                    <Card.Text
                        className="flex-grow-1"
                        style={{ color: "#FFFFFF", fontWeight: "300" }}
                    >
                        {p.description}
                    </Card.Text>
                    {p.moreinfo !== "None" ? (
                        <Link href={p.moreinfo}>
                        <button className="myButton">View More</button>
                        </Link>
                    ) : (
                        <br />
                    )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  return (
    <div style={{ background: "#555659", paddingBottom: "5%" }}>
      <div
        className="tag-head"
        style={{
          textAlign: "center",
          marginBottom: "3%",
          color: "white",
          paddingTop: "3%",
          fontWeight: "300",
        }}
        id="myproject"
      >
        My Projects
      </div>

      {/* แสดง projects */}
      {projects.length > 0 ? renderCards(projects, true) : (
        <p style={{ color: "white", textAlign: "center" }}>
          กำลังโหลด Projects...
        </p>
      )}

      {/* ✅ ปุ่ม More Info (มี if/else) */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button className="myButton" onClick={handleShowMore}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      <div
        className="tag-head"
        style={{
          textAlign: "center",
          marginTop: "3%",
          marginBottom: "3%",
          color: "white",
          fontWeight: "300",
        }}
        id="certificates"
      >
        My Certificates
      </div>

      {certificates.length > 0 ? renderCards(certificates) : (
        <p style={{ color: "white", textAlign: "center" }}>
          กำลังโหลด Certificates...
        </p>
      )}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Link href="https://drive.google.com/drive/folders/1Ij7AkDBkay4OBKrb76BMiuxsfOJNIo0d?usp=sharing">
          <button className="myButton">View More</button>
        </Link>
      </div>
    </div>
  );
}
