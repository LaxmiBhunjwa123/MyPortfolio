import "./FooterStyle.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
          <p>Maratthali Banglor</p>
          <p>Banglor</p>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8839441661
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              laxmibhunjwa@gmail.com
            </h4>
          </div>
        </div>
        
        <div className="right">
          <h4>About the company</h4>
          <p>this is me laxmi bhunjwa</p>
          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaHackerrank
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
