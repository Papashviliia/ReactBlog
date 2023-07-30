import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import banner from '../assets/bannger.png'
import "./footer.css"

export default function Footer () {
    return(
        <footer className="footer">
            <Link to="/" className="blog-title"><img src={banner} className="banner"/></Link>
            <section>
                <div className="soc-icons">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <img src={facebook} />
                    <img src={linkedin} />
                    <img src={telegram} />
                    <img src={twitter} />
                    <img src={youtube} />
                </div>
            </section>
        </footer>
    )
}
