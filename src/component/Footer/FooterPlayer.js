import React, { useState } from "react";
import "./FooterPlayer.scss";

const FooterPlayer = () => {
  const [activeButton, setActiveButton] = useState("");
  const handleButtonClick = (buttonName) => {
    setActiveButton((prev) => (prev === buttonName ? "" : buttonName));
  };
  const getImageSrc = (buttonName, activeImage, inactiveImage) => {
    return activeButton === buttonName
      ? process.env.PUBLIC_URL + activeImage
      : process.env.PUBLIC_URL + inactiveImage;
  };

  return (
    <footer className="footer-player">
      {/* Эхний хэсэг */}
      <div className="player-info">
        <img
          src={process.env.PUBLIC_URL + "/image/playerphoto.png"}
          alt="song thumbnail"
          className="song-image"
        />
        <div className="song-title">
          <p>Нүдэн хээр</p>
          <span> Дуучин Д.Пэрэнлэйлхагва</span>
        </div>
          <img
          src={process.env.PUBLIC_URL + "/image/Union.png"}
          alt="song thumbnail"
          className="song-icon"
        /> 
        <img
          src={process.env.PUBLIC_URL + "/image/hasah.png"}
          alt="song thumbnail"
          className="song-icon"
        /> 
      </div>

      {/* Хоёр дахь хэсэг (Player Controls) */}
      <div className="player-controls">
        <div className="controls">
        <img
          src={process.env.PUBLIC_URL + "/image/Player.png"} 
          alt="song thumbnail"/>
        </div>
      </div>

      {/* Гурав дахь хэсэг (Player Options) */}
      <div className="player-options">
      <img
          src={process.env.PUBLIC_URL + "/image/Alter song.png"} 
          alt="song thumbnail"/> 
      </div>
    </footer>
  );
};

export default FooterPlayer;
