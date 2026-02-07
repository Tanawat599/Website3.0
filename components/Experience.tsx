import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    logo?: string;
}

interface Props {
    experiences: ExperienceItem[];
}

export default function Experience({ experiences }: Props) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".experience-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="dark-bg" ref={sectionRef} style={{ paddingBottom: "8rem" }}>
            <div
                className="tag-head"
                style={{ textAlign: "center", marginBottom: "2rem", color: "white", fontWeight: '300' }}
            >
                Work Experience
            </div>
            <div className="flex" style={{ flexDirection: "column", gap: "2rem", maxWidth: "800px", margin: "0 auto" }}>
                {experiences && experiences.length > 0 ? (
                    experiences.map((exp) => (
                        <div key={exp.id} className="experience-card">
                            <div className="flex justify-space" style={{ alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap", gap: "1rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    {exp.logo && <img src={exp.logo} alt={exp.company} style={{ width: "auto", height: "40px", borderRadius: "50%", objectFit: "cover" }} />}
                                    <div>
                                        <h3 className="white" style={{ fontSize: "1.5rem", fontWeight: "600", margin: 0 }}>{exp.company}</h3>
                                        <span className="greenloght" style={{ fontSize: "1rem", fontWeight: "500" }}>{exp.role}</span>
                                    </div>
                                </div>

                            </div>
                            <span className="gray" style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>{exp.period}</span>
                            <p className="white" style={{ lineHeight: "1.6", opacity: 0.9, textAlign: 'justify' }}>{exp.description}</p>
                        </div>
                    ))

                ) : (
                    <div className="white" style={{ textAlign: "center" }}>No experience data available.</div>
                )}
            </div>
        </section>
    );
}
