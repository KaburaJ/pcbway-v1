import React from "react";
import './Footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
    return(
<>
  <link rel="stylesheet" href="style.css" />
  <title>My Website</title>
  <footer>
    <div className="container">
      <div className="footer-links">
        <ul>
          <li>
            <a href="https://www.pcbway.com/about.html">About Us</a>
          </li>
          <li>
            <a href="https://www.pcbway.com/contact.html">Contact Us</a>
          </li>
          <li>
            <a href="https://www.pcbway.com/sponsor.html">Sponsorship Program</a>
          </li>
          <li>
            <a href="https://member.pcbway.com/specials/referrals">Referral Program</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/pcbway" target="_blank">
          <FaFacebookF/>
        </a>
        <a href="https://twitter.com/PCBWayOfficial" target="_blank">
          <FaTwitter/>
        </a>
        <a href="https://www.youtube.com/pcbway" target="_blank">
          <FaYoutube/>
        </a>
        <a href="https://www.instagram.com/pcbway/" target="_blank">
          <AiFillInstagram/>
        </a>
        <a href="https://www.linkedin.com/company/pcbway" target="_blank">
          <FaLinkedin/>
        </a>
        <a href="https://www.tiktok.com/@pcbway" target="_blank">
          <FaTiktok/>
        </a>
      </div>
      <div className="newsletter">
        <h4>Subscribe to our Newsletter</h4>
        <input type="email" placeholder="Your Email" />
        <button type="button">Subscribe</button>
      </div>
      <p className="copyright">© 2024 PCBWay</p>
    </div>
  </footer>
</>

    )
}

export default Footer