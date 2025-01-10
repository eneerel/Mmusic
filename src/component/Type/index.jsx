import React from "react";
import "./style.scss";

const selectedSongs = [
  { src: "/image/recently1.png", alt: "Song 1" },
  { src: "/image/recently2.png", alt: "Song 2" },
  { src: "/image/recently3.png", alt: "Song 3" },
  { src: "/image/recently4.png", alt: "Song 4" },
  { src: "/image/recently5.png", alt: "Song 5" }
];

const SelectedSongType = () => {
  return (
    <div className="container">
      <div>
        <h2>Сонгогдсон жанр</h2>
        <hr />
      </div>
      <div className="recently">
        {selectedSongs.map((item, index) => (
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

export default SelectedSongType;
