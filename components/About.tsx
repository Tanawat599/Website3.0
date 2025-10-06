import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Iot Project"
                        icon="/images/iot.png"
                        description="I create design  products with unique ideas."
                        projects={7} />
                    <AboutCard
                        title="Robotic"
                        icon="/images/robotic-arm.png"
                        description="I develop Front-End with coding super smooth."
                        projects={10} />
                    <AboutCard
                        title="AI and Computer Vision"
                        icon="/icons/learning.png"
                        description="I develop cross-platform mobile applications."
                        projects={7} />
                    <AboutCard
                        title="Application and Game"
                        icon="/icons/personal-computer.png"
                        description="I develop cross-platform mobile applications."
                        projects={7} />
                </div>
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Tanawat Chuthaphiromporn</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it works!</h3>
                    <p className="gray">I am a Computer Engineering student passionate about using technology to improve daily life. 
                        I enjoy creating practical solutions through AI, IoT, and software development. With strong communication and teamwork skills, I thrive in collaborative environments and am eager to keep learning and innovating.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={36} height={36} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}