import React from "react";

export default function Main() {
    return (
        <div className="main">
            <img className="profilepic" src="ProfilePic.png"/>
            <div className="textcontent">
                <div className="subtitle">
                    <h1 className="name">Anish Prasad</h1>
                    <p className="profession">Software Developer</p>
                    <small className="site">https://ap247.github.io/DigitalBusinessCard/</small>
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
                <p>I'm a software developer with a particular interest in building new and unique products/services. I look to write fully-tested, clean code that follows previous conventions, while also pushing quick feature production and product iteration.</p>
                <h1>Interests</h1>
                <p>Tennis, Running, Skiing, New Cuisines, Geopolitics, Music Discovery, Group Chat Dynamics</p>
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