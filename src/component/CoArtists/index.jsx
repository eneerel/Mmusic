import React from "react";
import "./style.scss";

const res = [
  { src: "/image/coartists1.png", alt: "Song 1" },
  { src: "/image/coartists2.png", alt: "Song 2" },
  { src: "/image/coartists3.png", alt: "Song 3" },
  { src: "/image/coartists3.png", alt: "Song 4" },
  { src: "/image/coartists3.png", alt: "Song 5" }
];

const CoArtist = () => {
  return (
    <div className="container">
      <div>
        <h2>Шинээр нэмэгдсэн хамтрал бүтээлүүд</h2>
        <hr />
      </div>
      <div className="co-artist">
        {res.map((item, index) => (
          <div key={index} className="co-artist-item">
            <img
              src={process.env.PUBLIC_URL + item.src}
              alt={item.alt}
              className="co-artist-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoArtist;
