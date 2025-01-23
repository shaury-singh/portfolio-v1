import React from "react";
import shunnaya from "../Images/shunnaya.jpeg";
export default function Testimonials() {
  return (
    <div className="width-500 bg-white padding-sml margin-top border-10 primary-flex justify-center align-center">
      <div className="width-25">
        <img src={shunnaya} alt="" className="testimonials-img border-10"></img>
      </div>
      <div className="width-65">
        <p className="font-poppins spacing-l-sml">
          <b>"From the start of the project, through to completion, Shaury supported
          us and exceeded our expectations in every way."</b>
        </p>
      </div>
    </div>
  );
}
