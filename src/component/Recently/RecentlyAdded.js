import React from "react";
import "./RecentlyAdded.scss";

const res = [
  { src: "/image/recently1.png", alt: "Image 1"},
  { src: "/image/recently2.png", alt: "Image 2" },
  { src: "/image/recently3.png", alt: "Image 3" },
  { src: "/image/recently4.png", alt: "Image 4" },
  { src: "/image/recently5.png", alt: "Image 5" }
];
const RecentlyAdded = () => {
    return (
      <div className="container">
      <div>
       <h2>Шинээр нэмэгдсэн бүтээлүүд</h2>
       <hr/>
      </div>
       <div className="recently">
        {res.map((item, index) => (
          <div key={index} className="recently-item">
            <img
              src={process.env.PUBLIC_URL + item.src}
              alt={item.alt}
              className="recently-img"
            />
          </div>
        ))}
       </div>
      </div>
    );
  };
  
  export default RecentlyAdded;
