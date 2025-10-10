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
            <div className="header flex light-bg" style={{paddingTop:'3rem'}}>
                <div>
                    <div className="tag-head" style={{fontWeight:'300'}}>Tanawat Chuthaphiromporn</div>
                    <h1 className="green" style={{fontWeight:'300'}}>Computer Engineer</h1>
                    <p style={{ fontSize: "1.2rem", fontWeight: "300" }} className="white">I am a Computer Engineering student passionate about using technology to improve daily life.<br/>
                        I enjoy creating practical solutions through AI, IoT, and software development. With strong communication and teamwork skills,<br/>
                        I thrive in collaborative environments and am eager to keep learning and innovating. <br/></p>
                    <a className="green" href="mailto:jettotanawatwork@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/image3.png" width={686} height={651} alt="blaiti"  /> 
            </div>
        </header>
    )
}