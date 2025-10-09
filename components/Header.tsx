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
            <div className="header flex light-bg" style={{paddingTop:'5%'}}>
                <div>
                    <div className="tag-head">Tanawat Chuthaphiromporn</div>
                    <h1 className="white">Computer Engineer</h1>
                    <a className="green" href="mailto:jettotanawatwork@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/image3.png" width={686} height={651} alt="blaiti"  /> 
            </div>
        </header>
    )
}