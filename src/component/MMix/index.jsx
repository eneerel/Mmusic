import React from "react";
import "./style.scss";

const musicMixImages = [
  { src: "/image/recently1.png", alt: "Music Mix 1" },
  { src: "/image/recently2.png", alt: "Music Mix 2" },
  { src: "/image/recently3.png", alt: "Music Mix 3" },
  { src: "/image/recently4.png", alt: "Music Mix 4" },
  { src: "/image/recently5.png", alt: "Music Mix 5" }
];

const MusicMix = () => {
  return (
    <div className="container">
      <div>
        <h2>Музик Микс</h2>
        <hr />
      </div>
      <div className="recently">
        {musicMixImages.map((item, index) => (
          <div key={index} className="recently-item">
            <img
              src={process.env.PUBLIC_URL + item.src}
              alt={item.alt}
              className="recently-img"
            />
          </div>
        ))}
      </div>
      <div>
        <hr />
      </div>
      <div className="recently">
        {musicMixImages.map((item, index) => (
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

export default MusicMix;
