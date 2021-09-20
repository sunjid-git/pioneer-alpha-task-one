import React from "react";
import "./Home.css";

import arrow1 from "../../images/Arrow 1.png";
import arrow2 from "../../images/Arrow 2.png";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home-inner-menu">

          <div className="menu-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services & Package</li>
              <li>Gallery</li>
              <li>Package</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="home-inner all-text">
            <img src={arrow2} alt="" />
            <div className="home-text">
              <h1>A picture is worth a thousand words</h1>
              <p>
                It clearly and beautifully captures your emotions- the joy, the
                laughter, the tears, you name it. Our pride is in offering the
                best shoots as we help you tell your story in photos.
              </p>
              <p className="view-gallery">View Gallery</p>
            </div>
            <img src={arrow1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
