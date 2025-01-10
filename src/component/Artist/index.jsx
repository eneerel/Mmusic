import React from "react";
import "./style.scss";

const artists = [
  { src: "/image/recently1.png", alt: "Artist 1" },
  { src: "/image/recently2.png", alt: "Artist 2" },
  { src: "/image/recently3.png", alt: "Artist 3" },
  { src: "/image/recently4.png", alt: "Artist 4" },
  { src: "/image/recently5.png", alt: "Artist 5" },
];

const NewArtist = () => {
  return (
    <div className="new-artist">
      <div>
        <h2>New Artists</h2>
        <hr />
      </div>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <div key={index} className="artist-item">
            <img
              src={process.env.PUBLIC_URL + artist.src}
              alt={artist.alt}
              className="artist-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArtist;
