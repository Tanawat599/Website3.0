import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {

    return (
        <section id="about" className="dark-bg">
            <div
                className="tag-head"
                style={{ textAlign: "center", marginBottom: "2%", color: "white" ,fontWeight:'300'}}
                id='about'
            >
                About Me
            </div>
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Iot and Microcontroller"
                        icon="/images/iot.png"
                        description={
                            <div>
                                <img src="/icons/esp32.jpeg" style={{ width: "8%", height: "auto" }}/>
                                <img src='/icons/arduinoCloud.png' style={{ width: "8%", height: "auto" }}></img>
                                <img src='/icons/mqtt.png' style={{ width: "8%", height: "auto" }}></img>
                                <img src='/icons/arduino.png' style={{ width: "8%", height: "auto" }}></img>
                            </div>
                        }
                        projects={5} />
                    <AboutCard
                        title="Robotic"
                        icon="/images/robotic-arm.png"
                        description={
                            <div>
                                <img src="/icons/stm32.png" style={{ width: "8%", height: "auto" ,marginRight:'2%'}}/>
                                <img src='/icons/ros.png' style={{ width: "10%", height: "auto" }}></img>
                                <img src='/icons/rasp.png' style={{ width: "10%", height: "auto" }}></img>
                            </div>
                        }
                        projects={2} />
                    <AboutCard
                        title="AI and Computer Vision"
                        icon="/icons/learning.png"
                        description={
                            <div>
                                <img src="/icons/yolo.png" style={{ width: "10%", height: "auto" }}/>
                                <img src='/icons/opencv.png' style={{ width: "10%", height: "auto" }}></img>
                            </div>
                        }
                        projects={2} />
                    <AboutCard
                        title="Application and Game"
                        icon="/icons/personal-computer.png"
                        description={
                            <div>
                                <img src="/icons/web.png" style={{ width: "30%", height: "auto" ,marginTop: "-4%"}}/>
                                <img src="/icons/app.png" style={{ width: "15%", height: "auto" }}/>
                                <img src='/icons/roblox.png' style={{ width: "10%", height: "auto" }}></img>
                            </div>
                        }
                        projects={1} />
                </div>
                <div className="flex-full about-text">
                    <img src="https://jwlblqgkhpxztiswqahj.supabase.co/storage/v1/object/public/project-images/Edu.png" alt="wallety" style={{ width: "50%", height: "auto" ,marginLeft:'10%'}} />
                </div>
            </div>

            {/* <div className="flex partners justify-space">
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div> */}
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: React.ReactNode,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">

            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={36} height={36} alt={title} />
            </div>
            <div className="white">{description}</div>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}
