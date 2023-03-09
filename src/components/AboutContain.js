import "./AboutContainStyle.css";
import React from 'react'
import {Link} from 'react-router-dom'
import React1 from "../assets/product.jpg";
import React2 from "../assets/MovieApp.jpg";

const AboutContain = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I ?</h1>
            <p>i am react Frontend Developer. i create respornsive website.</p>
            <Link to="/contact"></Link>
            <button className="btn" >Contact</button>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContain;