import React from "react";
import "./style.scss";
const HighlightImg = () => {
  return (
    <div className="container">
     <div className="highlightimage">
        <img src={process.env.PUBLIC_URL + "/image/b1.png"}
          alt="Highlight Image"
          className="highlight-img"
        />
      </div>
    </div>
  );
};

export default HighlightImg;
