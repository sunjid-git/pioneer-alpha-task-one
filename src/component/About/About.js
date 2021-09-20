import React from "react";
import "./About.css";

import img1 from '../../images/offset_comp_772626-opt 1.svg';
import img2 from '../../images/offset_comp_772626-opt 2.svg';
import img3 from '../../images/offset_comp_772626-opt 3.svg';

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about-left">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
        <div className="about-right">
          <h1>About Us</h1>
          <p>
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
            text used in design when creating content. It helps designers plan
            out where the content will sit
          </p>
        </div>
      </section>
    </>
  );
}
