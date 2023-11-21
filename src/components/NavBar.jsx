import React from "react";

export default function()
{
    return (

        <nav className="Navigation--bar">
            <div className="logo--section">
                <img className="image--logo" src="https://w0.peakpx.com/wallpaper/864/910/HD-wallpaper-anime-ultra.jpg"/>
            </div>

            <ul className="link--list">
                <li className="text--link"><a href="#">Home</a></li>
                <li className="text--link"><a href="#">About</a></li>
                <li className="text--link"><a href="#">Projects</a></li>
                <li className="text--link"><a href="#">Contact</a></li>
            </ul>

            <div className="social--media">
                <li><a className="social--link fa instagram" href="#">Instagram</a></li>
                <li><a className="social--link fa facebook" href="#">Facebook</a></li>
                <li><a className="social--link fa Linkedin" href="#">LinkedIN</a></li>
            </div>
        </nav>
    )
}