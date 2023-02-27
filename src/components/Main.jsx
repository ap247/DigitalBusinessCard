import React from "react";

export default function Main() {
    return (
        <div className="main">
            <img className="profilepic" src="ProfilePic.png"/>
            <div className="textcontent">
                <div className="subtitle">
                    <h1 className="name">Anish Prasad</h1>
                    <p className="profession">Software Developer</p>
                    <small className="site">anishprasad.website</small>
                </div>
                <div className="textbuttons">
                    <button className="btnemail" onClick={openMailAddress}>
                    <span class="btnicon">
                        <img src="Mail.png" alt="Email Icon"/>
                    </span>
                    Email</button>
                    <button className="btnlinkedin" onClick={openLnProfile}>
                    <span class="btnicon">
                        <img src="linkedin.png" alt="LinkedIn Icon"/>
                    </span>
                    LinkedIn</button>
                </div>
                <h1>About</h1>
                <p>I am a software developer with a particular interest in building new and unique products/services. I look to keep up with security and best practices, and I'm always looking for new things to learn.</p>
                <h1>Interests</h1>
                <p>Food expert. Tennis fiend. Internet fanatic. Sparkling water conossuir. Crossword enthusiast.</p>
            </div>
        </div>
    )
}

const openLnProfile = () =>  {
    let link = "https://www.linkedin.com/in/anishprasadanpr/";
    window.open(link, '_blank');
};

const openMailAddress = () =>  {
    let link = "mailto: anish.prasad.anpr@gmail.com";
    window.open(link, '_blank');
};