import React from "react";

export default function BottomNav() {
    return (
        <div className="bottomnav">
            <button className="btnfacebook" onClick={() => openProfile("https://www.facebook.com/profile.php?id=100010563793902")}>
                <img src="Facebook Icon.png" alt="Facebook Icon"/>
            </button>
            <button className="btninstagram" onClick={() => openProfile("https://www.instagram.com/anish.anpr/")}>
            <img src="Instagram Icon.png" alt="Instagram Icon"/>
            </button>
            <button className="btngithub" onClick={() => openProfile("https://github.com/ap247")}>
                <img src="GitHub Icon.png" alt="Github Icon"/>
            </button>
        </div>
    )
        
}

const openProfile = (link) =>  {
    window.open(link, '_blank');
};