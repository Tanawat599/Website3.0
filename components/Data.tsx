"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type Item = {
  id: number;
  name: string;
  image: string;
  description: string;
  moreinfo: string;
};


export default function ProjectsAndCertificates() {
  const [projects, setProjects] = useState<Item[]>([]);
  const [certificates, setCertificates] = useState<Item[]>([]);
  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchProjects();
    fetchCertificates();
  }, []);

  useEffect(() => {
    // Animate projects when they load
    if (projects.length > 0 && projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll(".project-card-animated");
      gsap.set(cards, { opacity: 1, y: 0 }); // Ensure visible first

      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.1
        }
      );
    }
  }, [projects]);

  useEffect(() => {
    // Animate certificates when they load
    if (certificates.length > 0 && certificatesRef.current) {
      const cards = certificatesRef.current.querySelectorAll(".certificate-card-animated");
      gsap.set(cards, { opacity: 1, y: 0 }); // Ensure visible first

      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.1
        }
      );
    }
  }, [certificates]);


  async function fetchProjects() {
    try {
      const res = await fetch('/api/projects');
      if (!res.ok) throw new Error('Failed to fetch projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("❌ Error fetching projects:", error);
    }
  }


  async function fetchCertificates() {
    try {
      const res = await fetch('/api/certificates');
      if (!res.ok) throw new Error('Failed to fetch certificates');
      const data = await res.json();
      setCertificates(data);
    } catch (error) {
      console.error("❌ Error fetching certificates:", error);
    }
  }


  const handleShowMore = () => {
    setShowAll(!showAll);
  };


  const renderCards = (items: Item[], isProject = false, animationClass: string) => {

    const visibleItems = isProject && !showAll ? items.slice(0, 8) : items;

    return (
      <Container>
        <Row className="g-4">
          {visibleItems.map((p, index) => (
            <Col md={3} sm={6} key={p.id}>
              <div className={`dark-card ${animationClass}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="dark-card-image-wrapper">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="dark-card-image"
                  />
                </div>
                <div className="dark-card-content">
                  <h3 className="dark-card-title">
                    {p.name}
                  </h3>
                  <p className="dark-card-description">
                    {p.description}
                  </p>
                  {p.moreinfo && p.moreinfo !== "None" ? (
                    <Link href={p.moreinfo}>
                      <button className="dark-card-btn">View More</button>
                    </Link>
                  ) : (
                    <div style={{ height: '44px' }}></div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  return (
    <section className="dark-bg" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      {/* Projects Section */}
      <div
        className="tag-head"
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          color: "white",
          fontWeight: "300",
        }}
        id="myproject"
      >
        My Projects
      </div>

      <div ref={projectsRef}>
        {projects.length > 0 ? renderCards(projects, true, "project-card-animated") : (
          <div className="loading-skeleton">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <button className="myButton white-btn" onClick={handleShowMore}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {/* Certificates Section */}
      <div
        className="tag-head"
        style={{
          textAlign: "center",
          marginTop: "4rem",
          marginBottom: "3rem",
          color: "white",
          fontWeight: "300",
        }}
        id="certificates"
      >
        My Certificates
      </div>

      <div ref={certificatesRef}>
        {certificates.length > 0 ? renderCards(certificates, false, "certificate-card-animated") : (
          <div className="loading-skeleton">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <Link href="https://drive.google.com/drive/folders/1Ij7AkDBkay4OBKrb76BMiuxsfOJNIo0d?usp=sharing">
          <button className="myButton white-btn">View More</button>
        </Link>
      </div>
    </section>
  );
}

