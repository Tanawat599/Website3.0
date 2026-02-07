import React from "react";
import Image from "next/image";
import SplitText from "./SplitText";
import NavBar from "./NavBar";

export default function Header() {
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    return (
        <header >
            <NavBar />
            <div className="header flex dark-bg header-gradient" style={{ paddingTop: '4rem', position: 'relative' }}>
                <div style={{ zIndex: 2, maxWidth: '600px' }}>
                    <div className="tag-head" style={{ fontWeight: '300', marginBottom: '1rem' }}>Tanawat Chuthaphiromporn</div>
                    <h1 className="greenloght" style={{ fontWeight: '300', fontSize: '3.5rem', marginBottom: '1.5rem' }}>Computer Engineer</h1>
                    <p style={{ fontSize: "1.1rem", fontWeight: "300", lineHeight: "1.8", marginBottom: "2rem" }} className="white">
                        I am a Computer Engineering student passionate about using technology to improve daily life.
                        I enjoy creating practical solutions through AI, IoT, and software development. With strong communication and teamwork skills,
                        I thrive in collaborative environments and am eager to keep learning and innovating.
                    </p>
                    <a className="greenloght header-cta" href="mailto:jettotanawatwork@gmail.com" style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        border: '2px solid #4dba87',
                        borderRadius: '30px',
                        transition: 'all 0.3s ease',
                        fontWeight: '600'
                    }}>Let&#39;s chat!</a>
                </div>
                <div className="profile-image-wrapper" style={{ zIndex: 2 }}>
                    <Image src="/images/_MG_5244-Photoroom.png" width={600} height={700} alt="Tanawat Profile" className="profile-image" />
                </div>
            </div>
        </header>
    )
}