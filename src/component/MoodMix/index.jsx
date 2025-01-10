import React from "react";
import "./style.scss";

const moodMixImages = [
    { src: "/image/recently1.png", alt: "Mood Mix 1" },
    { src: "/image/recently2.png", alt: "Mood Mix 2" },
    { src: "/image/recently3.png", alt: "Mood Mix 3" },
    { src: "/image/recently4.png", alt: "Mood Mix 4" },
    { src: "/image/recently5.png", alt: "Mood Mix 5" }
  ];


const MoodMix = () => {
    return (
      <div className="container">
        <div>
          <h2>Mood mix</h2>
          <hr />
        </div>
        <div className="recently">
          {moodMixImages.map((item, index) => (
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

export default MoodMix;
