import React from "react";
import "./NewHot.scss";
const newhot = [
  { src: "/image/newhot1.png", alt: "Newhot Image 1" },
  { src: "/image/newhot2.png", alt: "Newhot Image 2" },
  { src: "/image/newhot3.png", alt: "Newhot Image 3" },
  { src: "/image/newhot4.png", alt: "Newhot Image 4" },
  { src: "/image/newhot5.png", alt: "Newhot Image 5" }
];

const NewHot = () => {
  return (
    <div className="container">
    <div>
     <h2>New Hot</h2>
     <hr/>
    </div>
     <div className="new-hot">
      {newhot.map((item, index) => (
        <div key={index} className="newhot-item">
          <img
            src={process.env.PUBLIC_URL + item.src}
            alt={item.alt}
            className="new-hot-img"
          />
        </div>
      ))}
     </div>
    </div>
  );
};

export default NewHot;
