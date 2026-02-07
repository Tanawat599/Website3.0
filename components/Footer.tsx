import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="dark-bg" id='contact' style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '3rem 5rem'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem'
            }}>
                <div>
                    <h3 style={{
                        color: '#4dba87',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem'
                    }}>Kidinventor</h3>
                    <span className="white" style={{ opacity: 0.7, fontSize: '0.9rem' }}>
                        Copyright © {year} <Link href="/">Tanawat Chuthaphiromporn</Link> - All rights reserved.
                    </span>
                </div>
                <ul className="flex social-icons" style={{ gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100086721786780&mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="social-icon">
                            <Image src="/icons/facebook.svg" width={28} height={28} alt="facebook-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jettokidinventor?utm_source=qr" target="_blank" rel="noreferrer" className="social-icon">
                            <Image src="/icons/instagram.svg" width={28} height={28} alt="instagram-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Tanawat599" target="_blank" rel="noreferrer" className="social-icon">
                            <Image src="/icons/github.svg" width={28} height={28} alt="github-icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@KidInventorJetto" target="_blank" rel="noreferrer" className="social-icon">
                            <Image src="/icons/youtube.svg" width={28} height={28} alt="youtube-icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}